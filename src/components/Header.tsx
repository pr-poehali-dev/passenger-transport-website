import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Bus" className="text-transport-red" size={32} />
          <h1 className="text-2xl font-heading font-bold text-transport-gray">
            ТрансСервис
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-transport-gray hover:text-transport-red transition-colors"
          >
            Главная
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-transport-gray hover:text-transport-red transition-colors"
          >
            О компании
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-transport-gray hover:text-transport-red transition-colors"
          >
            Услуги
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-transport-gray hover:text-transport-red transition-colors"
          >
            Контакты
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-transport-red hover:bg-transport-red-dark text-white"
          >
            Заказать
          </Button>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Icon name="Menu" size={24} />
        </Button>
      </div>
    </header>
  );
}
