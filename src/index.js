const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let char = ''; char_expr = ''; word = '';
    let end_expr = expr.length;
    for (let i = 0; i < end_expr; i += 10) {
        if (expr[i] != '*') {
            char_expr = expr.substr(i, 10);      
            char_expr = char_expr.substr(char_expr.indexOf("1"));
            let char_morse = '';
            for (let j = 0; j < char_expr.length; j += 2) {
                if ((char_expr[j] + char_expr[j + 1]) == '10') {
                    char_morse += '.'
                } else {
                    char_morse += '-'
                }
            }
            char = MORSE_TABLE[char_morse];
        } else {
            char = ' ';
        }
        word += char;
    }
    return word;
}

module.exports = {
    decode
}