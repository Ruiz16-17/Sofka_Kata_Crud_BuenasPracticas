function reducer(state, action) {
    switch (action.type) {
        case "update-item":
            const motoUpItem = state.moto;
            const listUpdateEdit = motoUpItem.list.map((item) => {
                if (item.id === action.item.id) {
                    return action.item;
                }
                return item;
            });
            motoUpItem.list = listUpdateEdit;
            motoUpItem.item = {};
            return { ...state, moto: motoUpItem };
        case "delete-item":
            const motoUpDelete = state.moto;
            const listUpdate = motoUpDelete.list.filter((item) => {
                
                return item.id !== action.id_moto;
                
            });
            motoUpDelete.list = listUpdate;
            return { ...state, moto: motoUpDelete };
        case "update-list":
            const motoUpList = state.moto;
            motoUpList.list = action.list;
            return { ...state, moto: motoUpList };
        case "edit-item":
            const motoUpEdit = state.moto;
            motoUpEdit.item = action.item;
            return { ...state, moto: motoUpEdit };
        case "add-item":
            const motoUp = state.moto.list;
            motoUp.push(action.item);
            return { ...state, moto: { list: motoUp, item: {} } };
        default:
            return state;
    }
}

export default reducer;