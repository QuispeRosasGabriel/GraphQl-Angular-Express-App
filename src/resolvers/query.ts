import { IResolvers } from "graphql-tools";

const query: IResolvers = {
    Query: {
        estudiantes(): string {
            return "Lista de estudiantes"
        }
    }
}

export default query