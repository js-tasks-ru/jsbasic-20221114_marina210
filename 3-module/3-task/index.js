function camelize(str) {
    return str
      .split('-')
      .map((str0,ind) => (ind>0) ? (str0[0].toUpperCase() + str0.slice(1)) : str0)
      .join('');

}
