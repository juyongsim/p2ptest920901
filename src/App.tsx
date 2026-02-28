/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Apple, 
  MessageCircle, 
  LayoutGrid, 
  Mail, 
  ChevronRight, 
  Trophy,
  ArrowLeft,
  User,
  UserCircle,
  CircleDot
} from "lucide-react";

type View = 'login' | 'register';

export default function App() {
  const [view, setView] = useState<View>('login');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [skill, setSkill] = useState<'beginner' | 'intermediate' | 'advanced'>('intermediate');

  return (
    <div className="min-h-screen bg-[#f6f7f8] font-sans flex flex-col items-center justify-center p-0 m-0 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {view === 'login' ? (
          <motion.div 
            key="login"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="relative w-full max-w-[480px] min-h-screen md:min-h-[850px] bg-white shadow-2xl overflow-hidden md:rounded-3xl flex flex-col"
          >
            {/* Hero Section */}
            <div className="relative h-[45vh] w-full overflow-hidden bg-slate-950">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{ 
                  backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.9) 100%), url("https://images.unsplash.com/photo-1534158914592-062992fbe900?q=80&w=2000&auto=format&fit=crop")` 
                }}
              />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative mb-4"
                >
                  <div className="w-24 h-24 rounded-full bg-[#1978e5] flex items-center justify-center shadow-[0_0_30px_rgba(25,120,229,0.5)] border-4 border-white/20">
                    <Trophy className="text-white w-12 h-12" />
                  </div>
                  <div className="absolute -right-4 top-0 bg-white text-[#1978e5] font-black px-2 py-1 rounded text-[10px] uppercase tracking-widest shadow-lg">
                    Live
                  </div>
                </motion.div>
                <h1 className="text-white text-5xl font-display font-black tracking-tighter mb-1">P2P</h1>
                <p className="text-[#1978e5] font-bold text-sm tracking-[0.3em] uppercase">Peer to Pingpong</p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
            </div>

            {/* Login Card Section */}
            <div className="relative flex-1 px-8 pb-12 -mt-10">
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
                <div className="text-center mb-10">
                  <h2 className="text-slate-900 text-2xl font-bold mb-2">다시 만나서 반가워요</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    전문적이고 활기찬 커뮤니티. 엘리트 플레이어 네트워크에 참여하세요.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <button className="group flex items-center justify-between w-full bg-[#111821] text-white rounded-2xl p-1 pr-6 hover:bg-black transition-all active:scale-[0.98]">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center m-1">
                      <Apple className="w-6 h-6" />
                    </div>
                    <span className="font-semibold text-sm">Apple로 계속하기</span>
                    <ChevronRight className="text-white/30 group-hover:text-white transition-colors w-5 h-5" />
                  </button>

                  <button className="group flex items-center justify-between w-full bg-[#FEE500] text-slate-900 rounded-2xl p-1 pr-6 hover:brightness-95 transition-all active:scale-[0.98]">
                    <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center m-1">
                      <MessageCircle className="w-6 h-6 fill-slate-800" />
                    </div>
                    <span className="font-bold text-sm">카카오로 계속하기</span>
                    <ChevronRight className="text-slate-900/30 group-hover:text-slate-900 transition-colors w-5 h-5" />
                  </button>

                  <button className="group flex items-center justify-between w-full bg-[#03C75A] text-white rounded-2xl p-1 pr-6 hover:brightness-95 transition-all active:scale-[0.98]">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center m-1">
                      <LayoutGrid className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-sm">네이버로 계속하기</span>
                    <ChevronRight className="text-white/30 group-hover:text-white transition-colors w-5 h-5" />
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100">
                  <button 
                    onClick={() => setView('register')}
                    className="w-full text-slate-400 text-xs font-medium hover:text-[#1978e5] transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" /> 이메일 주소로 로그인 / 회원가입
                  </button>
                </div>
              </div>

              {/* Stats Section */}
              <div className="mt-10 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-[#1978e5] font-black text-xl">12K+</p>
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">플레이어</p>
                </div>
                <div className="border-x border-slate-200">
                  <p className="text-[#1978e5] font-black text-xl">450+</p>
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">동호회</p>
                </div>
                <div>
                  <p className="text-[#1978e5] font-black text-xl">89</p>
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">지역</p>
                </div>
              </div>
            </div>

            <div className="p-6 text-center mt-auto">
              <p className="text-slate-400 text-[11px] leading-relaxed">
                가입 시 <a href="#" className="underline text-slate-600 font-medium">이용약관</a> 및 <a href="#" className="underline text-slate-600 font-medium">개인정보 처리방침</a>에 동의하게 됩니다.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="register"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="relative w-full max-w-[480px] min-h-screen md:min-h-[850px] bg-white shadow-2xl overflow-hidden md:rounded-3xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center p-6 justify-between border-b border-slate-50">
              <button 
                onClick={() => setView('login')}
                className="text-slate-900 flex size-10 items-center justify-center hover:bg-slate-50 rounded-full transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h2 className="text-slate-900 text-lg font-bold flex-1 text-center pr-10">회원가입</h2>
            </div>

            {/* Progress Indicator */}
            <div className="flex w-full flex-row items-center justify-center gap-3 py-6">
              <div className="h-2 w-12 rounded-full bg-[#ec5b13]"></div>
              <div className="h-2 w-2 rounded-full bg-[#ec5b13]/20"></div>
              <div className="h-2 w-2 rounded-full bg-[#ec5b13]/20"></div>
            </div>

            <div className="px-8 flex-1">
              <h3 className="text-slate-900 text-2xl font-bold leading-tight pt-4">P2P에 오신 것을 환영합니다!</h3>
              <p className="text-slate-500 text-sm font-normal leading-normal pb-8 pt-2">
                탁구 커뮤니티 활동을 위해 정보를 입력해주세요.
              </p>

              {/* Form Content */}
              <div className="space-y-6">
                {/* Name Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-slate-900 text-sm font-bold">이름</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 h-14 pl-12 pr-4 focus:ring-2 focus:ring-[#ec5b13]/20 focus:border-[#ec5b13] outline-none transition-all" 
                      placeholder="실명을 입력해 주세요" 
                      type="text"
                    />
                  </div>
                </div>

                {/* Nickname Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-slate-900 text-sm font-bold">닉네임</label>
                  <div className="relative">
                    <UserCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 h-14 pl-12 pr-4 focus:ring-2 focus:ring-[#ec5b13]/20 focus:border-[#ec5b13] outline-none transition-all" 
                      placeholder="활동할 닉네임을 입력해 주세요" 
                      type="text"
                    />
                  </div>
                </div>

                {/* Gender Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-slate-900 text-sm font-bold">성별</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => setGender('male')}
                      className={`flex items-center justify-center h-14 rounded-2xl border-2 transition-all font-bold ${
                        gender === 'male' 
                        ? 'border-[#ec5b13] bg-[#ec5b13]/5 text-[#ec5b13]' 
                        : 'border-slate-100 bg-slate-50 text-slate-400'
                      }`}
                    >
                      남성
                    </button>
                    <button 
                      onClick={() => setGender('female')}
                      className={`flex items-center justify-center h-14 rounded-2xl border-2 transition-all font-bold ${
                        gender === 'female' 
                        ? 'border-[#ec5b13] bg-[#ec5b13]/5 text-[#ec5b13]' 
                        : 'border-slate-100 bg-slate-50 text-slate-400'
                      }`}
                    >
                      여성
                    </button>
                  </div>
                </div>

                {/* Skill Level Selection */}
                <div className="flex flex-col gap-2 pb-10">
                  <label className="text-slate-900 text-sm font-bold">탁구 실력</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button 
                      onClick={() => setSkill('beginner')}
                      className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all ${
                        skill === 'beginner' 
                        ? 'border-[#ec5b13] bg-[#ec5b13] text-white' 
                        : 'border-slate-100 bg-slate-50 text-slate-400'
                      }`}
                    >
                      <span className="text-[10px] mb-0.5 opacity-80">초보</span>
                      <span className="font-bold text-sm">입문</span>
                    </button>
                    <button 
                      onClick={() => setSkill('intermediate')}
                      className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all ${
                        skill === 'intermediate' 
                        ? 'border-[#ec5b13] bg-[#ec5b13] text-white' 
                        : 'border-slate-100 bg-slate-50 text-slate-400'
                      }`}
                    >
                      <span className="text-[10px] mb-0.5 opacity-80">중급</span>
                      <span className="font-bold text-sm">숙련</span>
                    </button>
                    <button 
                      onClick={() => setSkill('advanced')}
                      className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all ${
                        skill === 'advanced' 
                        ? 'border-[#ec5b13] bg-[#ec5b13] text-white' 
                        : 'border-slate-100 bg-slate-50 text-slate-400'
                      }`}
                    >
                      <span className="text-[10px] mb-0.5 opacity-80">고수</span>
                      <span className="font-bold text-sm">전문가</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 pb-12">
                <button className="w-full bg-[#ec5b13] hover:bg-[#ec5b13]/90 text-white h-14 rounded-2xl font-bold text-lg shadow-lg shadow-[#ec5b13]/20 transition-all active:scale-95">
                  다음으로
                </button>
                <div className="flex justify-center items-center gap-2 text-sm text-slate-500">
                  <span>이미 계정이 있으신가요?</span>
                  <button 
                    onClick={() => setView('login')}
                    className="text-[#ec5b13] font-bold hover:underline"
                  >
                    로그인하기
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#ec5b13]/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
