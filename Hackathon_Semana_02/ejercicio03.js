const styles = ['Jazz', 'Blues']
console.log('1==>',styles)
styles.push('Rock-n-Roll')
console.log('2==>',styles)

const length = styles.length
const index = (length / 2) + 1
if(length % 2 === 1){ 
  styles.splice(index, 1, 'Classics')

}
console.log('3==>',styles)
styles.shift()
console.log('4==>',styles)
styles.unshift('Rap', 'Reggae')
console.log('5==>',styles)