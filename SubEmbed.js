class SubEmbed {
    constructor() {
        this.title = '';
        this.description = '';
        this.rows = [];
        this.character = '•';
        this.maxlength = 1024;
    }

    /**
     *
     * @param title
     * @returns {SubEmbed}
     */
    setTitle = (title) => {
        this.title = title;
        return this;
    }
    /**
     *
     * @param description
     * @returns {SubEmbed}
     */
    setDescription = (description) => {
        this.description = description;
        return this;
    }
    /**
     *
     * @param name
     * @param value
     * @returns {SubEmbed}
     */
    addField = (name, value) => {
        this.rows.push([ name, value ]);
        return this;
    }
    /**
     *
     * @param character
     * @returns {SubEmbed}
     */
    setCharacter = (character) => {
        this.character = character;
        return this;
    }
    /**
     *
     * @returns {string}
     */
    toString = () => {
        let str = '';
        if (this.title) str += `\n**${this.title}**`;
        if (this.description) str += `\n${this.description}`;
        str += this.rows.map(d => `\n${this.character} __${d[0]}:__ ${d[1]}`).join('');
        return str;
    }
}

module.exports = SubEmbed;