import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: 1, name: "Инженерные науки", icon: "Cog", courses: 24, color: "bg-blue-500" },
    { id: 2, name: "Информационные технологии", icon: "Code", courses: 18, color: "bg-purple-500" },
    { id: 3, name: "Естественные науки", icon: "Atom", courses: 15, color: "bg-green-500" },
    { id: 4, name: "Материаловедение", icon: "Boxes", courses: 12, color: "bg-amber-500" },
    { id: 5, name: "Энергетика", icon: "Zap", courses: 10, color: "bg-yellow-500" },
    { id: 6, name: "Физика и нанотехнологии", icon: "Microscope", courses: 14, color: "bg-indigo-500" },
    { id: 7, name: "Языки и гуманитарные дисциплины", icon: "Languages", courses: 20, color: "bg-pink-500" },
    { id: 8, name: "Управление и экономика", icon: "TrendingUp", courses: 16, color: "bg-orange-500" },
    { id: 9, name: "Дополнительное образование", icon: "GraduationCap", courses: 22, color: "bg-teal-500" },
  ];

  const popularCourses = [
    {
      id: 1,
      title: "Основы программирования на Python",
      author: "Проф. Иванов А.С.",
      duration: "8 недель",
      free: true,
      certificate: true,
      level: "Начальный",
      students: 1240,
    },
    {
      id: 2,
      title: "Введение в машиностроение",
      author: "Проф. Петрова М.Н.",
      duration: "10 недель",
      free: false,
      certificate: true,
      level: "Средний",
      students: 856,
    },
    {
      id: 3,
      title: "Физика для будущих инженеров",
      author: "Д-р Сидоров В.П.",
      duration: "12 недель",
      free: true,
      certificate: true,
      level: "Начальный",
      students: 2104,
    },
    {
      id: 4,
      title: "Веб-разработка: от основ до проекта",
      author: "Проф. Козлова Е.А.",
      duration: "6 недель",
      free: false,
      certificate: true,
      level: "Средний",
      students: 1567,
    },
    {
      id: 5,
      title: "Энергетика будущего",
      author: "Проф. Морозов И.К.",
      duration: "9 недель",
      free: true,
      certificate: false,
      level: "Продвинутый",
      students: 623,
    },
    {
      id: 6,
      title: "Материалы и технологии",
      author: "Д-р Волкова Т.И.",
      duration: "7 недель",
      free: false,
      certificate: true,
      level: "Средний",
      students: 945,
    },
  ];

  const learningSteps = [
    {
      number: "01",
      title: "Выберите курс",
      description: "Изучите каталог и найдите курс по вашей специализации",
      icon: "Search",
      color: "text-blue-500",
    },
    {
      number: "02",
      title: "Проходите модули",
      description: "Учитесь в удобном темпе с видеолекциями и материалами",
      icon: "Play",
      color: "text-purple-500",
    },
    {
      number: "03",
      title: "Выполняйте задания",
      description: "Решайте практические задачи и проходите тесты",
      icon: "CheckCircle2",
      color: "text-orange-500",
    },
    {
      number: "04",
      title: "Получите сертификат",
      description: "Подтвердите свои знания официальным документом ТПУ",
      icon: "Award",
      color: "text-green-500",
    },
  ];

  const features = [
    {
      icon: "GraduationCap",
      title: "Академическое качество",
      description: "Курсы разработаны преподавателями ТПУ",
    },
    {
      icon: "Wrench",
      title: "Инженерный фокус",
      description: "Акцент на технических специальностях",
    },
    {
      icon: "Laptop",
      title: "Современная платформа",
      description: "Доступ 24/7, мобильная версия",
    },
    {
      icon: "FileText",
      title: "Сертификаты",
      description: "Подтверждение компетенций",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              ТПУ
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Онлайн-курсы ТПУ</h1>
              <p className="text-xs text-gray-600">Tomsk Polytechnic University</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors">
              Каталог
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">
              О платформе
            </a>
            <a href="#how" className="text-gray-700 hover:text-primary transition-colors">
              Как учиться
            </a>
          </nav>
          <Button className="hidden md:block">Войти</Button>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 animate-fade-in"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <Badge className="mb-4 text-sm px-4 py-2">🚀 Учись у лучших</Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Онлайн-курсы <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Томского политеха
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Электронные курсы по инженерным, естественно-научным и IT-дисциплинам — доступно студентам и
              слушателям со всего мира
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
                <Icon name="BookOpen" className="mr-2" size={20} />
                Каталог курсов
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 hover:scale-105 transition-transform">
                Начать обучение
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Icon name="Users" size={18} className="text-primary" />
                <span>15,000+ студентов</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="BookMarked" size={18} className="text-secondary" />
                <span>150+ курсов</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Star" size={18} className="text-accent" />
                <span>Рейтинг 4.8</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">О платформе</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Современная образовательная платформа с фокусом на качество и результат
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4`}>
                    <Icon name={feature.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Каталог направлений</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Выберите направление и начните обучение прямо сегодня
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 ${
                  selectedCategory === category.name ? "border-primary shadow-lg" : "border-transparent"
                } animate-scale-in`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedCategory(category.name)}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mb-3`}>
                    <Icon name={category.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="mt-2">
                      {category.courses} курсов
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="w-full">
                    Смотреть курсы
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Популярные</Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Топ курсов</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Самые востребованные курсы для старта вашей карьеры
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCourses.map((course, index) => (
              <Card
                key={course.id}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                  <Icon name="BookOpen" size={64} className="text-primary/50" />
                </div>
                <CardHeader>
                  <div className="flex gap-2 mb-2">
                    {course.free && <Badge variant="secondary">Бесплатно</Badge>}
                    {course.certificate && (
                      <Badge variant="outline" className="border-green-500 text-green-700">
                        <Icon name="Award" size={12} className="mr-1" />
                        Сертификат
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                  <CardDescription className="space-y-2 mt-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="User" size={14} />
                      {course.author}
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Users" size={14} />
                        {course.students}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {course.level}
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Как проходит обучение</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Простой и понятный путь от выбора курса до получения сертификата
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningSteps.map((step, index) => (
              <div
                key={index}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl font-bold text-gray-200">{step.number}</div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center`}>
                      <Icon name={step.icon} size={24} className={step.color} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < learningSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <Icon name="ArrowRight" size={24} className="text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать обучение?</h3>
          <p className="text-xl mb-8 opacity-90">Присоединяйтесь к тысячам студентов уже сегодня</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 hover:scale-105 transition-transform">
              <Icon name="BookOpen" className="mr-2" size={20} />
              Выбрать курс
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white text-primary hover:bg-gray-100 hover:scale-105 transition-transform border-white"
            >
              <Icon name="Mail" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                  ТПУ
                </div>
                <span className="font-bold text-white">Онлайн-курсы</span>
              </div>
              <p className="text-sm">Официальная платформа онлайн-обучения Томского политехнического университета</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Обучение</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Каталог курсов
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Расписание
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Сертификаты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">О нас</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    О платформе
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Преподаватели
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Политика конфиденциальности
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>© 2024 Томский политехнический университет. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
