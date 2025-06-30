import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    route: "",
    passengers: "",
    date: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // имитация отправки формы
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        route: "",
        passengers: "",
        date: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-heading text-center text-transport-gray">
          Заказать перевозку
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              name="name"
              placeholder="Ваше имя *"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              name="phone"
              type="tel"
              placeholder="Телефон *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              name="route"
              placeholder="Маршрут (откуда - куда) *"
              value={formData.route}
              onChange={handleChange}
              required
            />
            <Input
              name="passengers"
              type="number"
              placeholder="Количество пассажиров *"
              value={formData.passengers}
              onChange={handleChange}
              required
              min="1"
            />
          </div>

          <Input
            name="date"
            type="date"
            placeholder="Дата поездки"
            value={formData.date}
            onChange={handleChange}
          />

          <Textarea
            name="message"
            placeholder="Дополнительные пожелания..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
          />

          <Button
            type="submit"
            className="w-full bg-transport-red hover:bg-transport-red-dark text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Отправляем..." : "Отправить заявку"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
