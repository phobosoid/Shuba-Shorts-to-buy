import { Search, Heart, Bell, User, PlayCircle, Clock, BarChart2, Leaf, Croissant, Soup, Egg, Utensils, IceCream, Fish, Sprout, Wine, Share2, Instagram, Youtube, X, ShoppingCart, Truck, ChevronRight, Info, Target, TrendingUp, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

interface PricingOption {
  id: string;
  label: string;
  price: string;
  desc: string;
}

interface ShortData {
  id: number;
  title: string;
  img: string;
  options: PricingOption[];
}

const SHORTS_DATA: ShortData[] = [
  { 
    id: 1,
    title: "Секрет ідеальної глазурі", 
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1328&auto=format&fit=crop",
    options: [
      { id: 'cheap', label: 'Економ', price: '189 ₴', desc: 'Базові інгредієнти за доступною ціною' },
      { id: 'optimal', label: 'Оптимальний', price: '276 ₴', desc: 'Найкраще співвідношення ціни та якості' },
      { id: 'premium', label: 'Преміум', price: '394 ₴', desc: 'Найкращі інгредієнти для ідеального смаку' }
    ]
  },
  { 
    id: 2,
    title: "Стір-фрай за 5 хвилин", 
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1472&auto=format&fit=crop",
    options: [
      { id: 'cheap', label: 'Економ', price: '145 ₴', desc: 'Базові овочі та соус' },
      { id: 'optimal', label: 'Оптимальний', price: '210 ₴', desc: 'Баланс свіжості та смаку' },
      { id: 'premium', label: 'Преміум', price: '320 ₴', desc: 'Фермерські продукти та авторський соус' }
    ]
  },
  { 
    id: 3,
    title: "Як працювати з тістом", 
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1472&auto=format&fit=crop",
    options: [
      { id: 'cheap', label: 'Економ', price: '98 ₴', desc: 'Борошно та дріжджі економ-класу' },
      { id: 'optimal', label: 'Оптимальний', price: '142 ₴', desc: 'Якісне борошно вищого гатунку' },
      { id: 'premium', label: 'Преміум', price: '215 ₴', desc: 'Італійське борошно "00" та жива закваска' }
    ]
  },
  { 
    id: 4,
    title: "Зберігаємо зелень свіжою", 
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1368&auto=format&fit=crop",
    options: [
      { id: 'cheap', label: 'Економ', price: '45 ₴', desc: 'Зелень з найближчого маркету' },
      { id: 'optimal', label: 'Оптимальний', price: '75 ₴', desc: 'Добірна зелень' },
      { id: 'premium', label: 'Преміум', price: '120 ₴', desc: 'Гідропонна свіжа зелень' }
    ]
  },
  { 
    id: 5,
    title: "Ідеальна домашня піца", 
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop",
    options: [
      { id: 'cheap', label: 'Економ', price: '210 ₴', desc: 'Готове тісто та звичайний сир' },
      { id: 'optimal', label: 'Оптимальний', price: '340 ₴', desc: 'Моцарела та томати пелаті' },
      { id: 'premium', label: 'Преміум', price: '520 ₴', desc: 'Буйволяча моцарела та пармська шинка' }
    ]
  },
  { 
    id: 6,
    title: "Освіжаючий літній напій", 
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1374&auto=format&fit=crop",
    options: [
      { id: 'cheap', label: 'Економ', price: '65 ₴', desc: 'Сезонні фрукти' },
      { id: 'optimal', label: 'Оптимальний', price: '110 ₴', desc: 'Екзотичні мікси' },
      { id: 'premium', label: 'Преміум', price: '195 ₴', desc: 'Органічні соки та суперфуди' }
    ]
  }
];

export default function App() {
  const [selectedShort, setSelectedShort] = useState<ShortData | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>('optimal');
  const [showConcept, setShowConcept] = useState(false);

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary selection:text-white">
      {/* Presentation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[110] flex gap-4">
        <button 
          onClick={() => setShowConcept(!showConcept)}
          className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all text-sm md:text-base border-4 border-white/20"
        >
          {showConcept ? <X className="w-5 h-5 font-bold" /> : <Info className="w-5 h-5 font-bold" />}
          {showConcept ? 'Продовжити перегляд' : 'Бізнес-концепція Flow ✨'}
        </button>
      </div>

      {/* Header */}
      <header className="bg-surface sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 h-20 flex justify-between items-center">
          <div className="flex items-center gap-12">
            <a href="/" className="font-serif text-3xl font-bold text-primary tracking-tight">SHUBA</a>
            <nav className="hidden lg:flex gap-8 items-center">
              <a href="#" className="font-sans text-sm font-bold text-primary border-b-2 border-primary pb-1">Рецепти</a>
              <a href="#" className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors">Техніки</a>
              <a href="#" className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors">Кухні світу</a>
              <a href="#" className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors">Здорове харчування</a>
              <a href="#" className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors">Події</a>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Пошук рецептів..." 
                className="bg-secondary-container/50 border-none rounded-full px-6 py-2 w-64 text-sm focus:ring-2 focus:ring-primary-container outline-none appearance-none"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
            </div>
            <div className="flex gap-4">
              <button className="text-primary hover:scale-110 transition-transform"><Heart className="w-5 h-5" /></button>
              <button className="text-primary hover:scale-110 transition-transform relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
              </button>
              <button className="text-primary hover:scale-110 transition-transform"><User className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-10 py-10">
        
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative min-h-[520px] sm:min-h-[600px] lg:h-[650px] rounded-[40px] overflow-hidden bg-primary-container group mb-16 shadow-xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1543&auto=format&fit=crop" 
            alt="Strawberry Ice Cream"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
          <div className="relative h-full flex flex-col justify-center px-6 py-12 sm:px-14 sm:py-14 lg:p-20 max-w-2xl text-white border-none">
            <motion.span 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-primary text-white text-[10px] font-bold px-5 py-1.5 rounded-full mb-6 w-fit tracking-[0.2em]"
            >
              РЕЦЕПТ ДНЯ
            </motion.span>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-[1.05]"
            >
              Домашнє полуничне морозиво: смак літа
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg opacity-90 mb-8 font-sans max-w-lg leading-relaxed"
            >
              Найкращий десерт для спекотного дня — натуральний, ніжний та дуже ароматний. Готуємо без зайвих зусиль.
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 mt-4"
            >
              <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:translate-y-[-4px] transition-all shadow-xl active:scale-95 leading-none text-base"> Дивитись рецепт </button>
              <div className="flex items-center gap-6 text-white/80 text-sm font-bold">
                <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /> 45 хв</span>
                <span className="flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-primary" /> 
                  Легко
                </span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Shorts Section */}
        <section className="bg-[#F8F7F2] -mx-10 px-10 py-20 rounded-[48px] mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
                <PlayCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold">Кухня Shorts</h2>
                <p className="text-on-surface-variant text-sm font-medium">Експрес-ідеї для вашого меню</p>
              </div>
            </div>
            <button className="text-sm font-bold text-primary hover:opacity-70 transition-opacity flex items-center gap-2">
              Дивитись всі <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {SHORTS_DATA.map((short) => (
              <motion.div 
                key={short.id}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedShort(short)}
                className="aspect-[9/16] bg-black rounded-[32px] relative overflow-hidden group cursor-pointer shadow-xl ring-1 ring-black/5"
              >
                <img src={short.img} alt={short.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-white text-sm font-bold leading-snug line-clamp-2 drop-shadow-sm">{short.title}</p>
                </div>
                {short.id === 1 && (
                  <div className="absolute top-4 right-4 bg-primary/90 text-white w-9 h-9 rounded-full flex items-center justify-center animate-bounce shadow-xl backdrop-blur-sm">
                    <TrendingUp className="w-4 h-4 font-bold" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* New Recipes */}
        <section className="py-20 border-b border-secondary-container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-2">Новинки сезону</h2>
              <p className="text-on-surface-variant">Свіжі рецепти, перевірені нашою редакцією</p>
            </div>
            <a href="#" className="hidden sm:block text-primary font-bold border-b-2 border-primary pb-1 hover:opacity-70 transition-opacity">Переглянути всі</a>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { title: "Зелений салат з лососем та авокадо", tag: "САЛАТИ", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1470&auto=format&fit=crop", desc: "Легкий та поживний варіант для вашого ідеального обіду з добірними морепродуктами." },
              { title: "Крем-суп із запечених овочів", tag: "ПЕРШІ СТРАВИ", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1471&auto=format&fit=crop", desc: "Оксамитова текстура та глибокий аромат запечених томатів і перцю." },
              { title: "Тост з авокадо та яйцем пашот", tag: "СНІДАНКИ", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1480&auto=format&fit=crop", desc: "Сучасна класика сніданків. Секрет у правильному приготуванні пашоту." }
            ].map((recipe, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="bg-white rounded-[32px] overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-500 border border-secondary-container/50"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={recipe.img} alt={recipe.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <span className="inline-block bg-primary/10 text-primary text-[10px] font-bold px-4 py-1.5 rounded-full mb-6 tracking-[0.1em]">{recipe.tag}</span>
                  <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{recipe.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3">{recipe.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Categories Grid */}
        <section className="py-24">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl font-serif font-bold mb-4">Що хочеш приготувати?</h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {[
              { name: "Випічка", icon: Croissant },
              { name: "Супи", icon: Soup },
              { name: "Сніданки", icon: Egg },
              { name: "Вечеря", icon: Utensils },
              { name: "Десерти", icon: IceCream },
              { name: "М'ясо та риба", icon: Fish },
              { name: "Вегетаріанське", icon: Sprout },
              { name: "Напої", icon: Wine }
            ].map((cat, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -8, scale: 1.05 }}
                className="flex flex-col items-center gap-5 group cursor-pointer"
              >
                <div className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center shadow-md group-hover:bg-primary group-hover:shadow-primary/30 transition-all duration-300">
                  <cat.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="font-bold text-sm tracking-tight group-hover:text-primary transition-colors">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary-container mt-20 py-24 rounded-t-[64px]">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 text-on-secondary-container">
            <div className="col-span-1">
              <a href="/" className="font-serif text-4xl font-bold block mb-8 tracking-tighter">SHUBA</a>
              <p className="text-base opacity-70 leading-[1.8] font-medium max-w-xs">Ваш персональний провідник у світ кулінарної творчості та гастрономічних відкриттів.</p>
            </div>
            <div>
              <h4 className="text-xl font-serif font-bold mb-10">Навігація</h4>
              <ul className="space-y-5 text-sm font-bold opacity-60">
                <li className="hover:text-primary hover:opacity-100 cursor-pointer transition-all">Про проєкт</li>
                <li className="hover:text-primary hover:opacity-100 cursor-pointer transition-all">Редакційна етика</li>
                <li className="hover:text-primary hover:opacity-100 cursor-pointer transition-all">Вакансії</li>
                <li className="hover:text-primary hover:opacity-100 cursor-pointer transition-all">Співпраця</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-serif font-bold mb-10">Інфо</h4>
              <ul className="space-y-5 text-sm font-bold opacity-60">
                <li className="hover:text-primary hover:opacity-100 cursor-pointer transition-all">Контакти</li>
                <li className="hover:text-primary hover:opacity-100 cursor-pointer transition-all">Для рекламодавців</li>
                <li className="hover:text-primary hover:opacity-100 cursor-pointer transition-all">Конфіденційність</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-serif font-bold mb-10">Стежте за нами</h4>
              <div className="flex gap-4">
                {[Share2, Instagram, Youtube].map((Icon, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg hover:shadow-primary/20 cursor-pointer transition-all"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-on-secondary-container/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold tracking-[0.2em] opacity-40 uppercase">© 2024 SHUBA Culinary Media. Усі права захищено.</p>
            <p className="text-xs font-bold opacity-30 italic">Створено для тих, хто закоханий у смак.</p>
          </div>
        </div>
      </footer>

      {/* Shorts Modal */}
      <AnimatePresence>
        {selectedShort && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedShort(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] shadow-2xl"
            >
              <div className="md:w-2/5 h-[320px] md:h-auto bg-[#1a1a1a] relative group overflow-hidden shrink-0">
                <img 
                  src={selectedShort.img} 
                  alt={selectedShort.title} 
                  className="w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-20 h-20 text-white/90 drop-shadow-2xl" />
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-white text-2xl font-serif font-bold leading-tight drop-shadow-md">{selectedShort.title}</h3>
                </div>
              </div>

              <div className="flex-1 p-6 md:p-10 lg:p-12 flex flex-col bg-surface overflow-y-auto">
                <div className="flex justify-between items-start mb-8">
                  <div className="max-w-md">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3 tracking-tight leading-tight">Зберіть набір для рецепта</h2>
                    <p className="text-on-surface-variant text-sm md:text-base leading-relaxed opacity-80">Ми автоматично підібрали найкращі інгредієнти, щоб результат був бездоганним.</p>
                  </div>
                  <button 
                    onClick={() => setSelectedShort(null)}
                    className="p-2 hover:bg-secondary-container rounded-full transition-all"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-[#1D1D1B] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 mb-6 hover:bg-black transition-all shadow-lg text-base"
                >
                  <ShoppingCart className="w-5 h-5 stroke-[2.5]" />
                  Додати всі інгредієнти
                </motion.button>

                <div className="bg-[#F8F7F2] p-6 rounded-2xl flex gap-4 mb-8 relative border border-primary/10 overflow-hidden group/truck">
                  <div className="w-10 h-10 shrink-0 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm border border-primary/5">
                    <Truck className="w-5 h-5 transition-transform group-hover/truck:translate-x-1" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Приготуйте завтра ввечері</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Усі інгредієнти прибудуть до завтрашньої вечері. Ми піклуємося про ваш вільний час.
                    </p>
                  </div>
                  <div className="absolute top-2 right-2">
                    <div className="bg-primary/[0.08] text-primary text-[8px] px-3 py-1 rounded-full font-black tracking-widest uppercase border border-primary/10">
                      COOK TOMORROW
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-4">Виберіть бюджет набору</p>
                  <div className="grid gap-3">
                    {selectedShort.options.map((opt) => (
                      <div 
                        key={opt.id}
                        onClick={() => setSelectedOption(opt.id)}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex justify-between items-center group ${
                          selectedOption === opt.id 
                          ? 'border-primary bg-primary/5' 
                          : 'border-secondary-container bg-white hover:border-primary/30'
                        }`}
                      >
                        <div className="flex gap-4">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selectedOption === opt.id ? 'border-primary' : 'border-on-surface-variant/20'}`}>
                            {selectedOption === opt.id && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                          </div>
                          <div>
                            <h5 className="font-bold text-sm group-hover:text-primary transition-colors">{opt.label}</h5>
                            <p className="text-[10px] text-on-surface-variant font-medium opacity-70">{opt.desc}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-serif font-black text-lg text-primary">{opt.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="flex items-center gap-2 text-xs font-bold text-on-surface-variant hover:text-primary transition-all mt-auto group w-fit">
                  <span className="border-b-2 border-transparent group-hover:border-primary">Налаштувати інгредієнти окремо</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Business Concept Presentation Overlay */}
      <AnimatePresence>
        {showConcept && (
          <div className="fixed inset-0 z-[150] overflow-y-auto bg-white/98 backdrop-blur-2xl">
            <div className="max-w-6xl mx-auto px-8 py-24 sm:py-32">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8"
              >
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-1 bg-primary rounded-full" />
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Presentation Project 2024</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#1a1a1a] mb-8 leading-tight">Від рецепта<br /><span className="text-primary italic">до кошика</span></h2>
                  <p className="text-2xl font-serif text-on-surface-variant leading-relaxed italic">Як перетворити натхнення на покупку, усуваючи тертя між контентом та вечерею.</p>
                </div>
                <button 
                  onClick={() => setShowConcept(false)}
                  className="bg-black text-white p-6 rounded-[32px] shadow-2xl hover:scale-110 active:scale-95 transition-all self-start md:self-end"
                >
                  <X className="w-8 h-8 font-bold" />
                </button>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-start">
                <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-[#1D1D1B] p-10 rounded-[48px] text-white shadow-2xl">
                    <Target className="w-12 h-12 text-primary mb-10" />
                    <h3 className="text-2xl font-serif font-bold mb-6">Проблема</h3>
                    <p className="opacity-70 leading-[1.8] text-base mb-6">Користувач надихається відео, але втрачає намір купити через необхідність ручного пошуку десятка інгредієнтів.</p>
                    <div className="space-y-3 pt-6 border-t border-white/10">
                      <p className="text-[10px] font-black tracking-widest opacity-40 uppercase">Наслідки</p>
                      <p className="text-sm font-bold opacity-90">• Когнітивне навантаження</p>
                      <p className="text-sm font-bold opacity-90">• Втрата понад 50% конверсії</p>
                    </div>
                  </div>

                  <div className="md:col-span-2 bg-[#F8F7F2] p-12 rounded-[48px] flex flex-col justify-between border border-primary/10">
                    <div>
                      <TrendingUp className="w-12 h-12 text-primary mb-10" />
                      <h3 className="text-3xl font-serif font-bold mb-8">Гіпотеза та Бізнес-ціль</h3>
                      <p className="text-xl font-serif leading-relaxed italic mb-10">Перетворення медіа-ресурсу в комерційну екосистему швидкого споживання.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {[
                        { label: 'CART ADDS', val: '+45%' },
                        { label: 'CONVERSION', val: 'x2.5' },
                        { label: 'AOV', val: '+20%' },
                        { label: 'RETENTION', val: 'HIGH' }
                      ].map(m => (
                        <div key={m.label} className="bg-white p-4 rounded-2xl shadow-sm border border-primary/5 text-center">
                          <p className="text-[8px] font-black opacity-40 uppercase tracking-widest mb-1">{m.label}</p>
                          <p className="text-xl font-serif font-bold text-primary">{m.val}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-4xl font-serif font-bold mb-16 text-center italic text-primary">"Cook Tomorrow" Strategy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                {[
                  { icon: ShoppingCart, title: 'One-Click Buy', desc: 'Автоматичне формування кошика на основі інгредієнтів рецепта.' },
                  { icon: Leaf, title: 'Три бюджети', desc: 'Економ, Оптимальний або Преміум. Персоналізація під можливості.' },
                  { icon: Lightbulb, title: 'Розумні заміни', desc: 'Заміна відсутніх товарів на аналоги за ціною або якістю автоматично.' },
                  { icon: Truck, title: 'Experience First', desc: 'Ми продаємо досвід приготування («Завтра до вечері»), а не просто доставку.' }
                ].map((s, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-white p-10 rounded-[40px] shadow-sm border border-primary/5 hover:shadow-2xl transition-all"
                  >
                    <div className="w-16 h-16 bg-primary/5 rounded-[24px] flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                      <s.icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold mb-4 tracking-tight">{s.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-[1.8] opacity-80">{s.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-[#1D1D1B] rounded-[64px] p-12 md:p-24 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
                <div className="relative z-10 max-w-3xl">
                  <h3 className="text-white text-4xl md:text-5xl font-serif font-bold mb-10 leading-tight tracking-tight">Стратегія трансформації SHUBA</h3>
                  <div className="flex flex-wrap items-center gap-8 mb-12 text-white/50 text-xs font-black uppercase tracking-[0.3em]">
                    <span className="border-b border-white/20 pb-2">РЕДАКЦІЙНЕ МЕДІА</span>
                    <TrendingUp className="w-8 h-8 text-primary" />
                    <span className="font-bold text-white border-b border-primary pb-2">COMMERCE ECOSYSTEM</span>
                  </div>
                  <p className="text-white/80 text-xl md:text-2xl leading-relaxed italic font-serif">
                    "Ми трансформуємо класичний сайт рецептів у повноцінне retail-медіа, яке інтегрується у щоденний споживчий кошик, забезпечуючи LTV вище галузевого стандарту за рахунок емоційного контенту та технологічного сервісу."
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
