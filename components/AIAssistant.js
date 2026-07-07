"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Send,
  Mic,
  Stethoscope,
  UserSearch,
  Landmark,
  MessageCircleQuestion,
  Sparkles,
  Volume2,
} from "lucide-react";
import { faqData } from "@/data/content";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";

// --- Lightweight rule-based "AI" logic ---------------------------------
// These simulate AI features without needing a backend key. Swap in a real
// LLM call (see README) once you're ready to go live with an API key.

const symptomMap = [
  { keywords: ["fever", "jwaram", "జ్వరం"], dept: "general-medicine", note: "Likely needs a General Medicine check-up. Seek urgent care if fever exceeds 3 days or breathing is affected." },
  { keywords: ["stomach", "pain", "abdomen", "kadupu"], dept: "general-surgery", note: "Abdominal pain can range from mild to urgent — a surgeon or physician should examine you soon." },
  { keywords: ["pregnan", "delivery", "gynaec", "periods"], dept: "obg", note: "Please consult our Obstetrics & Gynaecology team for personalised care." },
  { keywords: ["child", "baby", "infant", "pilla"], dept: "paediatrics", note: "Our Paediatrics team specialises in gentle care for children." },
  { keywords: ["bone", "fracture", "joint", "accident", "injury"], dept: "orthopaedics", note: "This sounds like it needs Orthopaedic evaluation, especially if there's swelling or inability to move the limb." },
  { keywords: ["chest", "heart", "palpitat", "bp", "pressure"], dept: "cardiology", note: "Chest or heart-related symptoms should be checked promptly — please visit Cardiology or Emergency if severe." },
  { keywords: ["eye", "vision", "kalu"], dept: "ophthalmology", note: "Please visit our Eye Care department for a vision check." },
  { keywords: ["headache", "migraine", "dizz", "numb"], dept: "neurology", note: "Persistent headaches or numbness should be evaluated by Neurology." },
];

function findDeptById(id) {
  return departments.find((d) => d.id === id);
}

function checkSymptoms(text) {
  const lower = text.toLowerCase();
  const match = symptomMap.find((s) => s.keywords.some((k) => lower.includes(k)));
  if (!match) {
    return {
      note: "I couldn't match specific keywords — for anything urgent (chest pain, breathlessness, heavy bleeding, unconsciousness), please call our emergency line immediately. Otherwise, General Medicine is a safe first stop.",
      dept: findDeptById("general-medicine"),
    };
  }
  return { note: match.note, dept: findDeptById(match.dept) };
}

function recommendDoctor(specialtyGuess) {
  const lower = specialtyGuess.toLowerCase();
  const found = doctors.find((d) => d.specialty.toLowerCase().includes(lower));
  return found || doctors[0];
}

function checkAarogyasri(answers) {
  // answers: { hasCard, incomeEligible, apResident }
  if (answers.hasCard === "yes") {
    return "Good news — with a valid Aarogyasri card, most listed procedures at our hospital are cashless. Bring the card and an ID proof to billing.";
  }
  if (answers.apResident === "yes" && answers.incomeEligible === "yes") {
    return "You're likely eligible even without the card yet — our billing desk can help you apply using your ration card / income certificate and Aadhaar.";
  }
  return "You may not qualify for Aarogyasri directly, but we offer affordable self-pay packages and can guide you to other government schemes if applicable.";
}

function answerFaq(text) {
  const lower = text.toLowerCase();
  let best = null;
  let bestScore = 0;
  faqData.forEach((f) => {
    const words = f.q.toLowerCase().split(/\W+/).filter((w) => w.length > 3);
    const score = words.filter((w) => lower.includes(w)).length;
    if (score > bestScore) {
      bestScore = score;
      best = f;
    }
  });
  return bestScore > 0
    ? best.a
    : "I don't have an exact answer for that yet — please call our reception or use WhatsApp and our staff will help you directly.";
}

// --- Tabs ----------------------------------------------------------------

const TABS = [
  { id: "chat", label: "Ask GVK AI", icon: MessageCircleQuestion },
  { id: "symptom", label: "Symptom Checker", icon: Stethoscope },
  { id: "doctor", label: "Find a Doctor", icon: UserSearch },
  { id: "aarogyasri", label: "Aarogyasri Check", icon: Landmark },
];

export default function AIAssistant() {
  const [tab, setTab] = useState("chat");
  const [lang, setLang] = useState("en-IN");
  const [listening, setListening] = useState(false);

  // Chat state
  const [messages, setMessages] = useState([
    { role: "bot", text: "Namaste! I'm the GVK Hospital Assistant. Ask me about timings, Aarogyasri, departments, or anything else. / నమస్తే!" },
  ]);
  const [input, setInput] = useState("");

  // Symptom state
  const [symptomInput, setSymptomInput] = useState("");
  const [symptomResult, setSymptomResult] = useState(null);

  // Doctor finder state
  const [doctorQuery, setDoctorQuery] = useState("");
  const [doctorResult, setDoctorResult] = useState(null);

  // Aarogyasri state
  const [aaAnswers, setAaAnswers] = useState({ hasCard: "", apResident: "", incomeEligible: "" });
  const [aaResult, setAaResult] = useState(null);

  const recognitionRef = useRef(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const startVoice = (onResult) => {
    const SpeechRecognition =
      typeof window !== "undefined" &&
      (window.SpeechRecognition || window.webkitSpeechRecognition);
    if (!SpeechRecognition) {
      alert("Voice search isn't supported in this browser. Please type instead.");
      return;
    }
    const recog = new SpeechRecognition();
    recog.lang = lang;
    recog.interimResults = false;
    recog.maxAlternatives = 1;
    recog.onstart = () => setListening(true);
    recog.onend = () => setListening(false);
    recog.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      onResult(transcript);
    };
    recognitionRef.current = recog;
    recog.start();
  };

  const sendChat = (text) => {
    const value = text ?? input;
    if (!value.trim()) return;
    setMessages((m) => [...m, { role: "user", text: value }]);
    const reply = answerFaq(value);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: reply }]);
    }, 400);
    setInput("");
  };

  const runSymptomCheck = (text) => {
    const value = text ?? symptomInput;
    if (!value.trim()) return;
    setSymptomResult(checkSymptoms(value));
  };

  const runDoctorFinder = (text) => {
    const value = text ?? doctorQuery;
    if (!value.trim()) return;
    setDoctorResult(recommendDoctor(value));
  };

  return (
    <section id="ai-assistant" className="bg-gradient-to-b from-trust-dark to-trust py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 mb-4">
            <Sparkles className="h-4 w-4 text-warmth" />
            <span className="text-white text-xs font-semibold">AI-Powered Assistance</span>
          </div>
          <h2 className="font-display font-bold text-white text-2xl sm:text-3xl lg:text-4xl">
            Not sure where to start? Ask our AI Assistant
          </h2>
          <p className="text-white/60 text-sm font-medium mt-1">
            మీ సందేహాలకు AI సహాయకుడు సమాధానం ఇస్తుంది
          </p>
        </div>

        <div className="mt-8 bg-white rounded-3xl shadow-glass overflow-hidden">
          {/* Tabs */}
          <div className="flex overflow-x-auto scroll-hide border-b border-trust/10">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex items-center gap-1.5 px-4 sm:px-5 py-3.5 text-xs sm:text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                  tab === t.id
                    ? "border-trust text-trust"
                    : "border-transparent text-ink/45 hover:text-ink/70"
                }`}
              >
                <t.icon className="h-4 w-4" />
                {t.label}
              </button>
            ))}
          </div>

          {/* Language + voice row */}
          <div className="flex items-center justify-between px-4 sm:px-6 pt-4">
            <div className="flex items-center gap-2 text-xs text-ink/50">
              <Bot className="h-4 w-4 text-trust" /> Multilingual · English + తెలుగు
            </div>
            <div className="flex items-center gap-1 bg-paper rounded-full p-1">
              <button
                onClick={() => setLang("en-IN")}
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${lang === "en-IN" ? "bg-trust text-white" : "text-ink/50"}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("te-IN")}
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${lang === "te-IN" ? "bg-trust text-white" : "text-ink/50"}`}
              >
                TE
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-6">
            <AnimatePresence mode="wait">
              {tab === "chat" && (
                <motion.div key="chat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="h-64 sm:h-72 overflow-y-auto flex flex-col gap-2.5 pr-1">
                    {messages.map((m, i) => (
                      <div
                        key={i}
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                          m.role === "bot"
                            ? "bg-paper text-ink self-start rounded-tl-sm"
                            : "bg-trust text-white self-end rounded-tr-sm"
                        }`}
                      >
                        {m.text}
                      </div>
                    ))}
                    <div ref={chatEndRef} />
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && sendChat()}
                      placeholder="Type your question… OPD timings? Aarogyasri?"
                      className="flex-1 rounded-full border border-trust/15 px-4 py-2.5 text-sm outline-none focus:border-trust"
                    />
                    <button
                      onClick={() => startVoice((t) => sendChat(t))}
                      className={`h-10 w-10 shrink-0 rounded-full flex items-center justify-center ${listening ? "bg-warmth text-ink animate-pulse-slow" : "bg-paper text-trust"}`}
                      aria-label="Voice search"
                    >
                      <Mic className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => sendChat()}
                      className="h-10 w-10 shrink-0 rounded-full bg-trust text-white flex items-center justify-center"
                      aria-label="Send"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {tab === "symptom" && (
                <motion.div key="symptom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <p className="text-sm text-ink/60 mb-3">
                    Describe how you're feeling — this gives a general direction only, not a diagnosis.
                  </p>
                  <div className="flex items-center gap-2">
                    <input
                      value={symptomInput}
                      onChange={(e) => setSymptomInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && runSymptomCheck()}
                      placeholder="e.g. fever and body pain for 2 days"
                      className="flex-1 rounded-full border border-trust/15 px-4 py-2.5 text-sm outline-none focus:border-trust"
                    />
                    <button
                      onClick={() => startVoice((t) => { setSymptomInput(t); runSymptomCheck(t); })}
                      className={`h-10 w-10 shrink-0 rounded-full flex items-center justify-center ${listening ? "bg-warmth text-ink animate-pulse-slow" : "bg-paper text-trust"}`}
                      aria-label="Voice search"
                    >
                      <Mic className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => runSymptomCheck()}
                      className="h-10 px-4 shrink-0 rounded-full bg-trust text-white text-sm font-semibold"
                    >
                      Check
                    </button>
                  </div>
                  {symptomResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 bg-aarogya-light rounded-2xl p-4"
                    >
                      <p className="text-sm text-ink/75">{symptomResult.note}</p>
                      {symptomResult.dept && (
                        <div className="mt-3 flex items-center gap-2 text-aarogya font-semibold text-sm">
                          <symptomResult.dept.icon className="h-4 w-4" />
                          Suggested: {symptomResult.dept.name}
                        </div>
                      )}
                      <p className="text-[11px] text-ink/40 mt-2">
                        This is not a medical diagnosis. For emergencies, call our 24×7 helpline immediately.
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {tab === "doctor" && (
                <motion.div key="doctor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <p className="text-sm text-ink/60 mb-3">
                    Tell me the specialty or concern — I'll point you to the right doctor.
                  </p>
                  <div className="flex items-center gap-2">
                    <input
                      value={doctorQuery}
                      onChange={(e) => setDoctorQuery(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && runDoctorFinder()}
                      placeholder="e.g. orthopaedic, child specialist, heart"
                      className="flex-1 rounded-full border border-trust/15 px-4 py-2.5 text-sm outline-none focus:border-trust"
                    />
                    <button
                      onClick={() => runDoctorFinder()}
                      className="h-10 px-4 shrink-0 rounded-full bg-trust text-white text-sm font-semibold"
                    >
                      Find
                    </button>
                  </div>
                  {doctorResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 bg-paper rounded-2xl p-4 flex items-center gap-4"
                    >
                      <div className="h-14 w-14 rounded-xl bg-trust/10 flex items-center justify-center shrink-0">
                        <UserSearch className="h-6 w-6 text-trust" />
                      </div>
                      <div>
                        <p className="font-display font-semibold text-ink text-sm">{doctorResult.name}</p>
                        <p className="text-xs text-trust font-medium">{doctorResult.specialty}</p>
                        <p className="text-xs text-ink/50 mt-0.5">{doctorResult.timings}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {tab === "aarogyasri" && (
                <motion.div key="aarogyasri" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <p className="text-sm text-ink/60 mb-4">Answer 3 quick questions to check likely eligibility:</p>
                  <div className="space-y-3">
                    {[
                      { key: "hasCard", q: "Do you already have an Aarogyasri health card?" },
                      { key: "apResident", q: "Are you a resident of Andhra Pradesh?" },
                      { key: "incomeEligible", q: "Is your family income within the scheme's limit?" },
                    ].map((q) => (
                      <div key={q.key} className="flex items-center justify-between gap-3">
                        <p className="text-sm text-ink/70 flex-1">{q.q}</p>
                        <div className="flex gap-1.5 shrink-0">
                          {["yes", "no"].map((opt) => (
                            <button
                              key={opt}
                              onClick={() => setAaAnswers((a) => ({ ...a, [q.key]: opt }))}
                              className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${
                                aaAnswers[q.key] === opt
                                  ? "bg-aarogya text-white border-aarogya"
                                  : "border-trust/15 text-ink/50"
                              }`}
                            >
                              {opt === "yes" ? "Yes" : "No"}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setAaResult(checkAarogyasri(aaAnswers))}
                    disabled={!aaAnswers.hasCard || !aaAnswers.apResident || !aaAnswers.incomeEligible}
                    className="mt-4 w-full rounded-full bg-trust text-white font-semibold py-2.5 text-sm disabled:opacity-40"
                  >
                    Check Eligibility
                  </button>
                  {aaResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 bg-aarogya-light rounded-2xl p-4 text-sm text-ink/75"
                    >
                      {aaResult}
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <p className="text-center text-white/40 text-xs mt-4 flex items-center justify-center gap-1.5">
          <Volume2 className="h-3.5 w-3.5" /> Voice search works best in Chrome on Android/desktop.
        </p>
      </div>
    </section>
  );
}
