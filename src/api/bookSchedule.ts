const baseUrl = 'https://api.telegram.org/bot6438659610:AAF2LR9AdLQfiLhXJOeCm2maIJuLQ7PdSCU/'
export  const sendMessage =  async (message: string): Promise<void> => {
    const url = `${baseUrl}sendMessage?chat_id=-4086206555&text=${message}`

    const response = await  fetch(url)



};
