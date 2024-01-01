// src/components/MoviePage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MoviePage.css';
import { useLocation } from 'react-router-dom';

const MoviePage = () => {
  const [showThrillerModal, setShowThrillerModal] = useState(false);
  const [selectedThriller, setSelectedThriller] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [ticketDetails, setTicketDetails] = useState({
    ticketNumber: '',
    date: '',
    time: '',
  });
   // Predefined options for date and time
   const allowedDates = ['2023-12-15', '2023-12-16', '2023-12-17'];
   const allowedTimes = ['12:00', '15:30', '18:45'];
 
   const handleDateChange = (date) => {
     setTicketDetails({
       ...ticketDetails,
       date,
     });
   };
 
   const handleTimeChange = (time) => {
     setTicketDetails({
       ...ticketDetails,
       time,
     });
   };
 
  const handleCinemaChange = (cinema) => {
    setTicketDetails({
      ...ticketDetails,
      cinema,
    });
  };
  const handleSubmitBookingForm = (e) => {
    e.preventDefault();

    // Generate a default ticket number (you can replace this with your own logic)
    const defaultTicketNumber = Math.floor(Math.random() * 1000000) + 1;

    // Update the ticket details with the generated ticket number
    setTicketDetails({
      ...ticketDetails,
      ticketNumber: defaultTicketNumber.toString(),
    });

    // Add your booking logic here (e.g., send data to a server, update state, etc.)
    setBookingSuccess(true);
  };


  const [bookingSuccess, setBookingSuccess] = useState(false);
  const location = useLocation();
  const { username } = location.state || {};

  const movies = [
    { id: 1, 
      title: 'The Creator', 
       genre: 'Action', 
       imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUIJZiEThsXozTY2jFF1R9UQpLW3cWILFpMdbTLSwRdxGFnJro', 
       thrillerDetails: '2023 ‧ Sci-fi/Action ‧ 2h 13m', 
       youtubeVideoId: 'ex3C1-5Dhb8' },
    { id: 2, 
      title: 'Mission: Impossible 7', 
      genre: 'Comedy', 
      imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRPunAXQI8_X7p1MYVmiRF-hSOinkCiCqca8p9_0vB22qS2ttjx', 
      thrillerDetails: '2023 ‧ Action/Thriller ‧ 2h 43m', 
      youtubeVideoId: 'avz06PDqDbM' },
      { id: 3, 
        title: 'Barbie', 
        genre: 'Comedy', 
        imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQaoW2gxmJFDPtqfC9pGL6Rdist9nH9ntMLV7XR1FXpaQj1VrGT', 
        thrillerDetails: '2023 ‧ Comedy/Fantasy ‧ 1h 54m', 
        youtubeVideoId: 'pBk4NYhWNMM' },
        { id: 4, 
          title: 'WONKA', 
          genre: 'Comedy', 
          imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfb174nFelYB-JXRKYJlCHVKIAcvBqG_PPsgvIcI6bMFgxJeDe', 
          thrillerDetails: '2023 ‧ Mystery ‧ 2h 50m', 
          youtubeVideoId: 'otNh9bTjXWg' },
          { id: 5, 
            title: 'The Nun II', 
            genre: 'Comedy', 
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BY2RkZGUzNmUtM2JlYi00ZDVhLWE2NTEtMzZjYWE2YjNmMzIwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg', 
            thrillerDetails: '2023 ‧ Horror/Mystery ‧ 1h 50m', 
            youtubeVideoId: 'QF-oyCwaArU' },
            { id: 6, 
              title: 'Freelance', 
              genre: 'Comedy', 
              imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQbnMu8DtZ3V-6dPO1wzQuQsVZ2XHzcvgeFgYRwPZKuSRGNR1AO', 
              thrillerDetails: '2023 ‧ Action/Comedy ‧ 1h 49m', 
              youtubeVideoId: '0u5E1pQK8Fc' },
              { id: 7, 
                title: 'Trolls Band Together', 
                genre: 'Comedy', 
                imageUrl: 'https://movies.universalpictures.com/media/tbt-vivapoppy-poster-650284cab59a5-1.jpg', 
                thrillerDetails: '2023 ‧ Comedy/Fantasy ‧ 1h 31m', 
                youtubeVideoId: 'qZ40Z62tcXM' },
                { id: 8, 
                  title: 'Family Switch', 
                  genre: 'Comedy', 
                  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzaDpjUkXlmuDW2gFn833Zh0FpYz0_OjRNK9pXaDxpwD14dio', 
                  thrillerDetails: '2023 ‧ Comedy/Family ‧ 1h 45m', 
                  youtubeVideoId: 'SWh4c9EVqGM' },
                  { id: 9, 
                    title: 'LEO', 
                    genre: 'Comedy', 
                    imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpkqdEkSZWQKOayjeaaVCBs-w_0pEVZWnGHQRhjQGZ3W8oApzo', 
                    thrillerDetails: '2023 ‧ Comedy/Musical ‧ 1h 42m ', 
                    youtubeVideoId: 'G_AEL-Xo5l8' },
                    { id: 10, 
                      title: 'The Marvels', 
                      genre: 'Comedy', 
                      imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/56245l11a_goat_philippines_apac_poster_1sht_e357e03a.jpeg', 
                      thrillerDetails: '2023 ‧ Action/Adventure ‧ 1h 45m ', 
                      youtubeVideoId: 'wS_qbDztgVY' },
                      { id: 11, 
                        title: 'The Love Gala', 
                        genre: 'Comedy', 
                        imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS4OY_YZZmkihvwZJlGd0ZD1fjbAMp7Q5E1clyNc_0oXvPg_rfz', 
                        thrillerDetails: 'TV Movie 2023  1h 26m     ', 
                        youtubeVideoId: 'NrT7Ymudpek' },
                        { id: 12, 
                          title: 'The Old Guard', 
                          genre: 'Comedy', 
                          imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJ2Nvloof0ra-_0SVISuKafVlXOCLVBRq_adEIGMx2f9Y1xgWE', 
                          thrillerDetails: '2020 ‧ Action/Fantasy ‧ 2h 5m ', 
                          youtubeVideoId: 'aK-X2d0lJ_s' },
                          { id: 13, 
                            title: 'The Wrong Missy', 
                            genre: 'Comedy', 
                            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTT4vn6EUAk3Drj8HR4r3E15Xtf1YvNHY07UqAPTazacm-_gb', 
                            thrillerDetails: '2020 ‧ Comedy/Romance ‧ 1h 30m ', 
                            youtubeVideoId: '2Cwaneq2w-4' },
                            { id: 14, 
                              title: 'Day Shift', 
                              genre: 'Comedy', 
                              imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkDcucAk5y5aFz9dnAdTZ7olHRhyNdz3dTLjmQdoFXmCRy1HYx', 
                              thrillerDetails: '22022 ‧ Action/Comedy ‧ 1h 54m ', 
                              youtubeVideoId: 'GN_IwBptKi4' },
                              { id: 15, 
                                title: 'Extraction 2', 
                                genre: 'Comedy', 
                                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fizNzdu8Tjdouj3avaO4QmsHRHpQNHC4mG7NewjcVlVdJWpA', 
                                thrillerDetails: '2023 ‧ Action/Thriller ‧ 2h 3m ', 
                                youtubeVideoId: 'Y274jZs5s7s' },
                                { id: 16, 
                                  title: 'John Wick: Chapter 4', 
                                  genre: 'Comedy', 
                                  imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQtrH0mQFT4UO4AuSjURYUll5aF4k5hGiRU6u8VYBA60Yr6-IL0', 
                                  thrillerDetails: '2023 ‧ Action/Thriller ‧ 2h 49m', 
                                  youtubeVideoId: 'qEVUtrk8_B4' },
    // Add more movies as needed
  ];

  const handleThrillerClick = (thriller) => {
    setSelectedThriller(thriller);
    setShowThrillerModal(true);
  };

  const handleBookNowClick = (movie) => {
    setSelectedMovie(movie);
    setShowBookingModal(true);
  };

  const handleCloseThrillerModal = () => {
    setShowThrillerModal(false);
  };

  const handleCloseBookingModal = () => {
    setShowBookingModal(false);
    setBookingSuccess(false);
    setTicketDetails({
      ticketNumber: '',
      date: '',
      time: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicketDetails({
      ...ticketDetails,
      [name]: value,
    });
  };

 

  return (
    <div className="page-container">
    
      <h2>Movies</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.imageUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p className="thriller-link">
              <Link to="#" onClick={() => handleThrillerClick(movie)}>Thriller</Link>
            </p>
            <p className="book-now-link">
              <Link to="#" onClick={() => handleBookNowClick(movie)}>Book Now</Link>
            </p>
          </div>
        ))}
      </div>

      {/* Thriller Modal */}
      {showThrillerModal && (
        <div className="modal" onClick={handleCloseThrillerModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseThrillerModal}>&times;</span>
            <h2>{selectedThriller.title} - Thriller</h2>
            <p>{selectedThriller.thrillerDetails}</p>
            <iframe
              title="YouTube Video"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${selectedThriller.youtubeVideoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
  {/* Booking Modal */}
  {showBookingModal && (
        <div className="modal" onClick={handleCloseBookingModal}>
        
      
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseBookingModal}>&times;</span>
            <h2>{selectedMovie.title} - Book Now</h2>
            {bookingSuccess ? (
              <div className="success-message">Successfully booked! Ticket Number: {ticketDetails.ticketNumber}</div>
            ) : (
              <form onSubmit={handleSubmitBookingForm}>
                <label htmlFor="ticketNumber">Ticket Number:</label>
                <input type="text" id="ticketNumber" name="ticketNumber" value={ticketDetails.ticketNumber} onChange={handleInputChange} required />

                <label htmlFor="cinema">Cinema:</label>
                <select id="cinema" name="cinema" value={ticketDetails.cinema} onChange={(e) => handleCinemaChange(e.target.value)} required>
                  <option value="">Select Cinema</option>
                  <option value="Eliana Cinema">Eliana Cinema</option>
                  <option value="Cinema Ampire | Piazza | አምፒር ሲኒማ | ፒያሳ">Cinema Ampire | Piazza | አምፒር ሲኒማ | ፒያሳ</option>
                  <option value="Alem Cinema">Alem Cinema</option>
                  {/* Add more cinema options as needed */}
                </select>


                <label htmlFor="date">Date:</label>
                {/* Use the input type 'date' for date picker */}
                <select id="date" name="date" value={ticketDetails.date} onChange={(e) => handleDateChange(e.target.value)} required>
                  <option value="">Select Date</option>
                  {allowedDates.map((date) => (
                    <option key={date} value={date}>{date}</option>
                  ))}
                </select>

                <label htmlFor="time">Time:</label>
                {/* Use the input type 'time' for time picker */}
                <select id="time" name="time" value={ticketDetails.time} onChange={(e) => handleTimeChange(e.target.value)} required>
                  <option value="">Select Time</option>
                  {allowedTimes.map((time) => (
                    <option key={time} value={time} disabled={/* Add condition to disable certain times */ false}>{time}</option>
                  ))}
                </select>

                <button type="submit">Submit</button>
              </form>
            )}
          </div>
       
        </div>
      )}
    </div>
  );
};

export default MoviePage;