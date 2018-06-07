export const templateData = [
    [{"q" : "do"}, {"w" : "re"}, {"e" : "mi"}, {"r" : "fa"}, {"t" : "sol"}, {"y" : "la"}, {"u" : "si"}, {"i" : "do"}, {"o" : "re"}, {"p" : "mi"}, {"[" : "fa"}, {"]" : "sol"}],
    [{"a" : "do"}, {"s" : "re"}, {"d" : "mi"}, {"f" : "fa"}, {"g" : "sol"}, {"h" : "la"}, {"j" : "si"}, {"k" : "do"}, {"l" : "re"}, {";" : "mi"}, {"'" : "fa"}],
    [{"z" : "do"}, {"x" : "re"}, {"c" : "mi"}, {"v" : "fa"}, {"b" : "sol"}, {"n" : "la"}, {"m" : "si"}, {"," : "do"}, {"." : "re"}, {"/" : "mi"}],
    [{"space" : "do"}]
    ]

export const keys = "q wertyuiop[]asdfghjkl;'zxcvbnm,./".split("");
 
export const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};