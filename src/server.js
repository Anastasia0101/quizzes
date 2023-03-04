import { createServer, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      quiz: Model,
    },

    seeds(server) {
      server.db.loadData({
        quizzes: [
          { 
            title: 'Math',
            description: 'Add numbers',
            questions: [
              {
                id: '1',
                text: '2+3',
                options: [
                  { text: '2', isCorrect: false },
                  { text: '5', isCorrect: true },
                  { text: '7', isCorrect: false }
                ]
              },
              {
                text: '2+3',
                options: [
                  { text: '2', isCorrect: false },
                  { text: '5', isCorrect: true },
                  { text: '7', isCorrect: false }
                ]
              }
            ]
          },
        ],
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/quizzes", ({db}) => {
        return db.quizzes;
      });
  
      this.post("/quizzes", (schema, request) => {
        let quiz = JSON.parse(request.requestBody);

        return schema.db.quizzes.insert(quiz);
      });

      this.delete("/quizzes/:id", (schema, request) => {
        let id = request.params.id;

        return schema.db.quizzes.find(id).delete();
      });
    },
  })
  return server;
}