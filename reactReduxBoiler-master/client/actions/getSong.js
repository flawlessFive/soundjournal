export function getSong(num) {
	console.log(num)
  	const songs = ['0zVMzJ37VQNFUNvdxxat2E', '3kxfsdsCpFgN412fpnW85Y','2Mpj1Ul5OFPyyP4wB62Rvi', '5kIcrM3QVD4BQPFMszQnU1']

  	let newSong = songs[num]
  	console.log(newSong)
  return {
    type: 'SONG',
    payload: newSong
  };
}

