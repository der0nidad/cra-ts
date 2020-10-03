import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

type Props = {};

export const LoginForm: React.FC<Props> = () => {
  //   const [article, setArticle] = React.useState<IArticle | {}>();

  //   const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
  //     setArticle({
  //       ...article,
  //       [e.currentTarget.id]: e.currentTarget.value,
  //     });
  //   };

  //   const addNewArticle = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     saveArticle(article);
  //   };

  return (
    <div>
      <Card>
        <CardHeader title="23094">897kjh adf</CardHeader>
        <CardContent>
          <Typography>CardContent</Typography>
        </CardContent>
      </Card>
      <div>Войти</div>
      <button>Нет, Выйти</button>
    </div>
  );
};
