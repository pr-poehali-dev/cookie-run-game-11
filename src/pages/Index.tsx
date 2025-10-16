import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const characters = [
    {
      name: 'GingerBrave',
      rarity: 'Эпический',
      role: 'Атака',
      description: 'Смелое печенье-герой',
      color: '#EAB543'
    },
    {
      name: 'Strawberry Cookie',
      rarity: 'Редкий',
      role: 'Защита',
      description: 'Сладкая защитница',
      color: '#FF6B9D'
    },
    {
      name: 'Wizard Cookie',
      rarity: 'Легендарный',
      role: 'Магия',
      description: 'Могучий маг',
      color: '#8B4FFF'
    },
    {
      name: 'Dark Choco Cookie',
      rarity: 'Легендарный',
      role: 'Танк',
      description: 'Темный рыцарь',
      color: '#2C3E50'
    }
  ];

  const features = [
    { icon: 'Crown', title: 'Создай Королевство', desc: 'Построй свою империю печенек' },
    { icon: 'Swords', title: 'Эпические Битвы', desc: 'Сражайся с монстрами' },
    { icon: 'Users', title: 'Собери Команду', desc: 'Более 200+ персонажей' },
    { icon: 'Sparkles', title: 'Магия и Приключения', desc: 'Невероятные квесты' }
  ];

  const news = [
    { date: '15 Окт', title: 'Новое обновление 3.5!', tag: 'Обновление' },
    { date: '10 Окт', title: 'Хэллоуин Ивент', tag: 'Событие' },
    { date: '5 Окт', title: 'Новые персонажи', tag: 'Новинка' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-50 to-orange-50">
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b-4 border-amber-400 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-4xl">🍪</div>
              <h1 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-pink-500 to-purple-600">
                COOKIE RUN
              </h1>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Персонажи', 'Геймплей', 'Скачать', 'Новости', 'Сообщество'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="font-bold text-gray-700 hover:text-pink-500 transition-colors duration-200 hover:scale-110 transform"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="md:hidden bg-pink-500 hover:bg-pink-600">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-pink-400 via-purple-400 to-orange-300 py-20 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-6xl animate-bounce">🍬</div>
          <div className="absolute top-20 right-20 text-5xl animate-pulse">🍭</div>
          <div className="absolute bottom-20 left-1/4 text-7xl animate-bounce">🧁</div>
          <div className="absolute bottom-10 right-1/3 text-6xl animate-pulse">🍰</div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6 animate-bounce">
            <div className="text-8xl md:text-9xl">🍪</div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">
            COOKIE RUN<br />KINGDOM
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-bold">
            Присоединяйся к самой сладкой RPG приключенческой игре!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white font-black text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-110 transition-transform border-4 border-white">
              <Icon name="Download" size={24} className="mr-2" />
              СКАЧАТЬ СЕЙЧАС
            </Button>
            <Button size="lg" variant="outline" className="bg-white hover:bg-gray-100 text-purple-600 font-black text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-110 transition-transform border-4 border-amber-400">
              <Icon name="Play" size={24} className="mr-2" />
              СМОТРЕТЬ ТРЕЙЛЕР
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-pink-500">
            Популярные Персонажи
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {characters.map((char, idx) => (
              <Card 
                key={idx} 
                className="border-4 border-amber-300 hover:border-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden"
                style={{ backgroundColor: `${char.color}15` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold border-2 border-white">
                      {char.rarity}
                    </Badge>
                    <Icon name="Cookie" size={32} style={{ color: char.color }} />
                  </div>
                  <CardTitle className="text-2xl font-black">{char.name}</CardTitle>
                  <CardDescription className="text-lg font-bold" style={{ color: char.color }}>
                    {char.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-semibold">{char.description}</p>
                  <Button className="w-full mt-4 font-bold" style={{ backgroundColor: char.color }}>
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            Особенности Геймплея
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border-4 border-purple-300 hover:border-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
              >
                <div className="bg-gradient-to-br from-purple-400 to-pink-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:rotate-12 transition-transform">
                  <Icon name={feature.icon as any} size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-black mb-2 text-gray-800">{feature.title}</h4>
                <p className="text-gray-600 font-semibold">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                Скачай Игру
              </h3>
              <p className="text-xl text-gray-700 mb-8 font-semibold">
                Доступно на всех платформах! Начни свое приключение прямо сейчас.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold rounded-xl px-6 py-6">
                  <Icon name="Apple" size={24} className="mr-2" />
                  App Store
                </Button>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl px-6 py-6">
                  <Icon name="Smartphone" size={24} className="mr-2" />
                  Google Play
                </Button>
              </div>
            </div>
            <div className="text-center">
              <div className="text-9xl animate-bounce">📱</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-100 to-pink-100">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-500">
            Последние Новости
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, idx) => (
              <Card key={idx} className="border-4 border-orange-300 hover:border-pink-400 transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold">
                      {item.tag}
                    </Badge>
                    <span className="text-sm text-gray-500 font-bold">{item.date}</span>
                  </div>
                  <CardTitle className="text-xl font-black">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full font-bold border-2 border-pink-400 text-pink-600 hover:bg-pink-50">
                    Читать далее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-5xl font-black mb-6">
            Присоединяйся к Сообществу!
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-semibold">
            Миллионы игроков по всему миру. Найди друзей, делись стратегиями и побеждай вместе!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 font-bold text-lg px-8 py-6 rounded-full">
              <Icon name="Facebook" size={24} className="mr-2" />
              Facebook
            </Button>
            <Button size="lg" className="bg-sky-400 hover:bg-sky-500 font-bold text-lg px-8 py-6 rounded-full">
              <Icon name="Twitter" size={24} className="mr-2" />
              Twitter
            </Button>
            <Button size="lg" className="bg-red-500 hover:bg-red-600 font-bold text-lg px-8 py-6 rounded-full">
              <Icon name="Youtube" size={24} className="mr-2" />
              YouTube
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-3xl">🍪</div>
            <p className="text-xl font-black">COOKIE RUN KINGDOM</p>
          </div>
          <p className="text-gray-400 font-semibold">© 2024 Cookie Run Kingdom. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}