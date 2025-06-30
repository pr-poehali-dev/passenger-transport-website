import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-transport-gray text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icon name="Bus" className="text-transport-red" size={24} />
              <h3 className="text-lg font-heading font-bold">ТрансСервис</h3>
            </div>
            <p className="text-sm text-gray-300">
              Надежные пассажирские перевозки по всей России
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-semibold">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Городские перевозки</li>
              <li>Междугородние рейсы</li>
              <li>Корпоративный транспорт</li>
              <li>Экскурсионные туры</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-semibold">Контакты</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (800) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@transservice.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>г. Москва, ул. Транспортная, 1</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-semibold">Мы в соцсетях</h4>
            <div className="flex space-x-4">
              <Icon
                name="Facebook"
                className="text-gray-300 hover:text-transport-red cursor-pointer transition-colors"
                size={20}
              />
              <Icon
                name="Instagram"
                className="text-gray-300 hover:text-transport-red cursor-pointer transition-colors"
                size={20}
              />
              <Icon
                name="Twitter"
                className="text-gray-300 hover:text-transport-red cursor-pointer transition-colors"
                size={20}
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm text-gray-300">
          <p>&copy; 2024 ТрансСервис. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
