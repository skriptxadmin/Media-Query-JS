export const MediaQuery = {

    breakpoints: {
        xs:576,
        sm:767,
        md:991,
        lg: 1199,
        xl:1399,
    },

    set:function(args){
        this.breakpoints = {...this.breakpoints, ...args}
    },

    get:function(){

        return this.breakpoints;
    },

    xs: function () {
        return window.matchMedia(`(max-width: ${this.breakpoints.xs}px)`)?.matches;
    },
    sm: function () {
       return window.matchMedia(`(min-width: ${this.breakpoints.xs+1}px) and (max-width: ${this.breakpoints.sm}px)`)?.matches;
    },
    md: function () {
        return window.matchMedia(`(min-width: ${this.breakpoints.sm+1}px) and (max-width: ${this.breakpoints.md}px)`)?.matches;
    },
    lg: function () {
        return  window.matchMedia(`(min-width: ${this.breakpoints.md+1}px) and (max-width: ${this.breakpoints.lg}px)`)
            ?.matches;
    },
    xl: function () {
        return  window.matchMedia(`(min-width: ${this.breakpoints.lg+1}px) and (max-width: ${this.breakpoints.xl}px)`)
            ?.matches;
    },
    xxl: function () {
        return  window.matchMedia(`(min-width: ${this.breakpoints.xl+1}px)`)?.matches;
    },
};
