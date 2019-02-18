var utility = {
    escapeSpecialChars: function (value) {
        if (!value) return '';
        if (typeof value === 'string' || value instanceof String) {
            // escaping the apostrophe else the gremlin query throws error
            value = value.replace(/'/g, "\\'");
        }
        return value;
    }
};
module.exports = utility;