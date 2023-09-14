const baseUrl = 'https://api.telegram.org/bot6438659610:AAF2LR9AdLQfiLhXJOeCm2maIJuLQ7PdSCU/'
export  const sendMessage =  async (message: string): Promise<void> => {
    const url = `${baseUrl}sendMessage?chat_id=-1001769949102&text=${message}`
    console.log('13341')

    const response = await  fetch(url)

    console.log('response', response)



};
