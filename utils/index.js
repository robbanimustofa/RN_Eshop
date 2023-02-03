export const searchFunc = (arrayData, field, value) => {
    return(
        arrayData.filter((i) => i[field].toLowerCase().includes(value.toLowerCase()))
    );
  };
