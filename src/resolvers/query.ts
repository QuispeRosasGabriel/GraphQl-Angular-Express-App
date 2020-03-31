import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";

const query: IResolvers = {
    Query: {
        estudiantes(): any {
            return database.estudiantes
        },
        estudiante(__: void, { id }): any {
            const resultado = database.estudiantes.filter(estudiante => estudiante.id === id)[0]
            if (resultado === undefined) {
                return {
                    id: `${id}`,
                    name: `No se ha encontrado el estudiante con el id ${id}`,
                    email: "",
                    courses: []
                }
            }
            return resultado;
        },
        cursos(): any {
            return database.cursos
        },
        curso(__: void, { id }): any {
            const resultado = database.cursos.filter(curso => curso.id === id)[0]
            if (resultado === undefined) {
                return {
                    id: `${id}`,
                    title: `No se ha encontrado el curso con el id ${id}`,
                    description: "",
                    clases: -1,
                    time: 0.0,
                    logo: "",
                    nivel: "All",
                    path: "",
                    teacher: "",
                    reviews: []
                }
            }
            return resultado;
        },
    }
}

export default query