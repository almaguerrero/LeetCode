/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
El programa requiere validar una cadena dada que contiene solo tres tipos de corchetes {},[],()
La idea de utilizar una pila para realizar el seguimiento de los parentesis de apertura encontrados y
comprobar si los paréntesis de cierre coinciden con último paréntesis de apertura.
Como se hace:
1.- crea un stack para guardar los brackets de abertura
2.- Recorrer la cadena dada caracter por characters
3.- si el caractere actual es de apertura empujajlo a la fila
4.- si el caracter es un corchete de cierre, saque el elemento superior de la fila y verifique si
coincide con el corchete de cierre actual. Si no, devuelve dalso.
5.- Despues de recorrer la cadena si la pila no está vacía devuelve falso
6.- Si la cadena es valida, devuelve verdadero
Complejidad:
Tiempo de Complejidad: O(n), donde n es el tamño del string que se pasa. Se recorre el string entero

Complejidad de espacio: O(n)

*/
function paren(s){
  const stack = [];
      let count = 0;
      for (let i = 0; i < s.length; i++) {
          if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
              stack.push(s[i]);
              count++;

          } else {
              if (stack.length === 0) return false;
              const ch = stack.pop();
              if ((s[i] === ')' && ch === '(') || (s[i] === ']' && ch === '[') || (s[i] === '}' && ch === '{')) {
              } else {
                  return false;
              }

              count--;

          }
      }
      return count === 0;
};
console.log(paren("{}[]"))
