import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const Newsletter = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">
        Join Our Daily{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Newsletter
        </span>
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        Stay updated with our latest content.
      </p>

      <form className="flex flex-col w-full gap-2" onSubmit={handleSubmit}>
        <Input
          placeholder="fonij2002@gmail.com"
          className="bg-muted/50 dark:bg-muted/80 py-2"
          aria-label="email"
        />
        <Button className="py-2">{t("blog_page.newsletter.submit_btn")}</Button>
      </form>
    </div>
  );
};
