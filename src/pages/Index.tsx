import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 bg-gradient-to-br from-transport-red to-transport-red-dark text-white"
      >
        <div className="container mx-auto px-4 py-20">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-heading font-bold">
              Надежные пассажирские перевозки
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Комфортные поездки по всей России с опытными водителями и
              современным автопарком
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-white text-transport-red hover:bg-gray-100 font-semibold"
              >
                Заказать поездку
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-transport-red"
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-transport-gray mb-4">
              О компании ТрансСервис
            </h2>
            <p className="text-xl text-transport-gray-light max-w-3xl mx-auto">
              Более 15 лет мы обеспечиваем качественные пассажирские перевозки
              по всей России
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Icon
                  name="Award"
                  className="text-transport-red mx-auto mb-4"
                  size={48}
                />
                <h3 className="text-xl font-heading font-semibold mb-4">
                  15+ лет опыта
                </h3>
                <p className="text-transport-gray-light">
                  Многолетний опыт в сфере пассажирских перевозок
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Icon
                  name="Users"
                  className="text-transport-red mx-auto mb-4"
                  size={48}
                />
                <h3 className="text-xl font-heading font-semibold mb-4">
                  10000+ клиентов
                </h3>
                <p className="text-transport-gray-light">
                  Тысячи довольных клиентов доверяют нам свои поездки
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Icon
                  name="Shield"
                  className="text-transport-red mx-auto mb-4"
                  size={48}
                />
                <h3 className="text-xl font-heading font-semibold mb-4">
                  100% безопасность
                </h3>
                <p className="text-transport-gray-light">
                  Все водители имеют лицензии, автопарк застрахован
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-transport-gray mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-transport-gray-light max-w-3xl mx-auto">
              Широкий спектр пассажирских перевозок для любых задач
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon
                  name="MapPin"
                  className="text-transport-red mb-4"
                  size={32}
                />
                <h3 className="text-lg font-heading font-semibold mb-2">
                  Городские перевозки
                </h3>
                <p className="text-sm text-transport-gray-light">
                  Комфортные поездки по городу в любое время
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon
                  name="Route"
                  className="text-transport-red mb-4"
                  size={32}
                />
                <h3 className="text-lg font-heading font-semibold mb-2">
                  Междугородние рейсы
                </h3>
                <p className="text-sm text-transport-gray-light">
                  Путешествия между городами с максимальным комфортом
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon
                  name="Briefcase"
                  className="text-transport-red mb-4"
                  size={32}
                />
                <h3 className="text-lg font-heading font-semibold mb-2">
                  Корпоративный транспорт
                </h3>
                <p className="text-sm text-transport-gray-light">
                  Деловые поездки и трансфер для сотрудников
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon
                  name="Camera"
                  className="text-transport-red mb-4"
                  size={32}
                />
                <h3 className="text-lg font-heading font-semibold mb-2">
                  Экскурсионные туры
                </h3>
                <p className="text-sm text-transport-gray-light">
                  Познавательные поездки по интересным местам
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-transport-gray mb-4">
              Контакты и заказ
            </h2>
            <p className="text-xl text-transport-gray-light max-w-3xl mx-auto">
              Свяжитесь с нами для заказа поездки или получения консультации
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Icon
                  name="Phone"
                  className="text-transport-red mt-1"
                  size={24}
                />
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    Телефон
                  </h3>
                  <p className="text-transport-gray-light">+7 (800) 555-0123</p>
                  <p className="text-sm text-transport-gray-light">
                    Круглосуточно, без выходных
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Icon
                  name="Mail"
                  className="text-transport-red mt-1"
                  size={24}
                />
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    Email
                  </h3>
                  <p className="text-transport-gray-light">
                    info@transservice.ru
                  </p>
                  <p className="text-sm text-transport-gray-light">
                    Ответим в течение часа
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Icon
                  name="MapPin"
                  className="text-transport-red mt-1"
                  size={24}
                />
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    Адрес
                  </h3>
                  <p className="text-transport-gray-light">
                    г. Москва, ул. Транспортная, 1
                  </p>
                  <p className="text-sm text-transport-gray-light">
                    Офис работает с 9:00 до 18:00
                  </p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
