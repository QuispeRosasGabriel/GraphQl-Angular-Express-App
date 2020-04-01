import { IResolvers } from "graphql-tools";
import _ from 'lodash';
import { database } from "../data/data.store";
const mutation: IResolvers = {
    Mutation: {
        cursoNuevo(__: void, { curso }): any {
            const ItemCurso = {
                id: String(database.cursos.length + 1),
                title: curso.title,
                description: curso.description,
                clases: curso.clases,
                time: curso.time,
                logo: curso.logo,
                level: curso.level,
                path: curso.path,
                teacher: curso.teacher,
                reviews: []
            }
            if (database.cursos.filter(itemCurs => itemCurs.title === ItemCurso.title).length === 0) {
                database.cursos.push(ItemCurso);
                return ItemCurso
            }
            return {
                id: "-1",
                title: "El Curso con este título ya existe",
                description: "",
                clases: -1,
                time: 0.0,
                logo: "",
                level: "All",
                path: "",
                teacher: "",
                reviews: []

            }
        },
        modificarCurso(__: void, { curso }) {
            const elementoExiste = _.findIndex(database.cursos, function (o) {
                return o.id === curso.id
            });
            if (elementoExiste > -1) {
                const valoraciones = database.cursos[elementoExiste].reviews;
                curso.reviews = valoraciones;
                database.cursos[elementoExiste] = curso;
                return curso;
            }
            return {
                id: '-1',
                title: "El curso no existe ne la base de datos",
                description: "",
                clases: -1,
                time: 0.0,
                logo: "",
                level: "All",
                path: "",
                teacher: "",
                reviews: []

            }
        }
    }
}

export default mutation