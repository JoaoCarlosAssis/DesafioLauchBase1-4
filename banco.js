const user = {
  name: 'Rodnei Jorge',
  transactions: [],
  balance: 0
};

function createTransaction(transactions) {
  user.transactions.push(transactions)

  if (transactions.type === 'credit') {
    user.balance = user.balance + transactions.value

  } else {
    user.balance = user.balance - transactions.value
  }

}

function getHigherTransactionByType(type){
  let highertTrasition
  let highrtValue = 0
  for(let transaction of user.transactions){
    if(transaction.type == type && transaction.value > highrtValue){
      highrtValue = transaction.value
      highertTrasition = transaction
    }
  }
  return highertTrasition
}

function getAverageTransactionValue(){
  let average = 0
  for(let transaction of user.transactions){
    average += transaction.value
  }
  return average / user.transactions.length
}

function getTransactionsCount(){
 count = {
   credit: 0,
   debit: 0,
 }

  for(let transaction of user.transactions){
    if(transaction.type === 'credit')
      count.credit++
    else (transaction.type == 'debit')
      count.debit++
    
  }
  return count
}


createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })


console.log(`o saldo do cliente é igaul a ${user.balance}`  )

console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))

console.log(getAverageTransactionValue())

console.log(getTransactionsCount())