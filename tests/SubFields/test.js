const SubFields = new (require('../../SubFields'));

// Add fields to the subfields
SubFields.addField('test_1', 'value_1');
SubFields.addField('test_2', 'value_2');

// print value
console.log(SubFields.toString());