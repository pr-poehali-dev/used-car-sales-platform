import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    telegram: '',
    carBrand: '',
    carYear: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({
      fullName: '',
      phone: '',
      telegram: '',
      carBrand: '',
      carYear: '',
      message: ''
    });
  };

  const requirements = [
    { icon: 'Calendar', title: 'Год выпуска', description: 'Автомобили не старше 5 лет от года производства' },
    { icon: 'CheckCircle', title: 'Техническое состояние', description: 'Без серьезных повреждений, в исправном состоянии' },
    { icon: 'FileCheck', title: 'Документы', description: 'Полный пакет документов из КНР, подтверждающих происхождение' },
    { icon: 'Zap', title: 'Мощность двигателя', description: 'С 01.12.2025 льготный утильсбор (3400₽/5200₽) только для авто до 160 л.с. Для более мощных - расчет по новой прогрессивной шкале' },
    { icon: 'Shield', title: 'Юридическая чистота', description: 'Отсутствие обременений, залогов и ограничений' },
  ];

  const workSteps = [
    { number: '01', title: 'Оставьте заявку', description: 'Заполните форму с информацией об автомобиле' },
    { number: '02', title: 'Оценка автомобиля', description: 'Наши специалисты проведут оценку и проверку документов' },
    { number: '03', title: 'Расчет стоимости', description: 'Предоставим детальный расчет с учетом всех сборов и пошлин' },
    { number: '04', title: 'Оформление сделки', description: 'Подготовка и оформление всех необходимых документов' },
    { number: '05', title: 'Таможенное оформление', description: 'Растаможка автомобиля и получение российских документов' },
    { number: '06', title: 'Передача автомобиля', description: 'Получение готового автомобиля с российскими номерами' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="relative h-[600px] bg-gradient-to-br from-secondary to-secondary/90 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src="https://cdn.poehali.dev/projects/93cb60e1-a445-4a18-8776-0e9ccca8796d/files/7989665f-f1f5-47ee-8476-ce9e87333a7a.jpg" 
          alt="BeijingAuto" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            BeijingAuto из КНР в РФ
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8 animate-fade-in">
            Профессиональная доставка и растаможка новых и б/у автомобилей китайского производства. 
            Полное юридическое сопровождение, прозрачные условия, гарантия качества.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 animate-scale-in"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="Send" className="mr-2" size={20} />
            Оставить заявку
          </Button>
        </div>
      </header>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Требования к автомобилям</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Мы работаем только с автомобилями, соответствующими высоким стандартам качества
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((req, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in border-2">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={req.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl">{req.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">{req.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Порядок работы</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Простой и прозрачный процесс от заявки до получения автомобиля
          </p>
          <div className="max-w-4xl mx-auto space-y-6">
            {workSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="text-5xl font-bold text-primary/20">{step.number}</div>
                    <div>
                      <CardTitle className="text-2xl">{step.title}</CardTitle>
                      <CardDescription className="text-base mt-2">{step.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Оставить заявку</h2>
            <p className="text-center text-muted-foreground mb-8">
              Заполните форму, и наш специалист свяжется с вами в течение 30 минут
            </p>
            <Card className="shadow-xl">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">ФИО *</Label>
                    <Input 
                      id="fullName" 
                      placeholder="Иванов Иван Иванович"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Номер телефона *</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        placeholder="+7 (900) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="telegram">Telegram</Label>
                      <Input 
                        id="telegram" 
                        placeholder="@username"
                        value={formData.telegram}
                        onChange={(e) => setFormData({...formData, telegram: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="carBrand">Марка и модель *</Label>
                      <Input 
                        id="carBrand" 
                        placeholder="Например: Haval Jolion"
                        value={formData.carBrand}
                        onChange={(e) => setFormData({...formData, carBrand: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="carYear">Год выпуска *</Label>
                      <Input 
                        id="carYear" 
                        type="number"
                        placeholder="2022"
                        min="2019"
                        max="2025"
                        value={formData.carYear}
                        onChange={(e) => setFormData({...formData, carYear: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Дополнительная информация</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о комплектации, пробеге, состоянии автомобиля..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button type="submit" className="w-full text-lg py-6" size="lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                  <p className="text-white/90">+7 977 804 57 17</p>
                  <p className="text-white/90">Ежедневно с 9:00 до 21:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-white/90">a_aladyshev@internet.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Telegram</h3>
                  <p className="text-white/90">@aladysheff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/90 text-white py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">© 2024 Китайские автомобили. Профессиональная доставка и растаможка.</p>
          <p className="text-white/60 mt-2 text-sm">Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;