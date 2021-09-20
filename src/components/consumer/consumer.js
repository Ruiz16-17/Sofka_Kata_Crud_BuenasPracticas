const HOST_API = "http://localhost:8080/api/moto";

const consumer = {

    list : async () => {
        
        return fetch(HOST_API + "/");
    },

    save : async (request) => {

        return fetch(HOST_API + "/agregar", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },

    update: async (request) => {
        return fetch(HOST_API + "/editar", {
            method: "PUT",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },

    delete: async (id) => {

        return fetch(HOST_API + "/" + id, {
            method: "DELETE"
        })
    }

    

}

export default consumer;