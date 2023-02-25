class SubFields {
    /**
     * @param data
     * @param character
     */
    constructor(data = [], character = '•') {
        this.data = data;
        this.character = character;
    }

    /**
     * Add a field to the subfields
     * @param name
     * @param value
     * @returns {SubFields}
     */
    addField = (name, value) => {
        this.data.push([ name, value ]);
        return this;
    };

    /**
     * Returns value
     * @returns {string}
     */
    toString = () => this.data.map(d => `\n${this.character} __${d[0]}:__ ${d[1]}`).join('');
}

module.exports = SubFields;