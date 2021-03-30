class Formatter {
  
  static capitalize(string) {
      return string.replace(/^\w/, (c) => c.toUpperCase());
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
     string.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
  }

  static makeSmaller(string){
    string = string.replace("a", "an", "but", "of", "and", "for", "at", "by", "from".toLowerCase());
  }
}