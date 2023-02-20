export const searchFunc = (arrayData, field, value) => {
    return (
        arrayData.filter((i) => i[field].toLowerCase().includes(value.toLowerCase()))
    );
};

export const changeCtg = (arrayData, field, value, setOne) => {
    return (
        value === 'all'
            ? [setproductCategories(initialState), setActive(true)] : [setproductCategories(
                arrayData.filter((i) => i[field]._id === value), setActive(true)
            )]
    )

}