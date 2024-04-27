function getId(id) {
    if (typeof id === "string") {
        id.toLocaleLowerCase();
    }
    return "233" + id;
}
getId(7);
