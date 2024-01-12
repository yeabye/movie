// src/components/MoviePage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TVShowsPage.css';
import { useLocation } from 'react-router-dom';

const TVShowsPage = () => {
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
   const allowedDates = ['Friday-2023-12-15', 'Tuseday-2023-12-26', 'Sunday-2024-01-06'];
   const allowedTimes = ['12:00', '15:30', '18:00'];
 
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

  const tvshows = [
    { id: 1, 
      title: 'Money Heist',
       genre: 'Action', 
       imageUrl: 'https://www.tallengestore.com/cdn/shop/products/MoneyHeist-NetflixTVShowPosterFanArt_67917fbc-de8e-4228-90a4-217503d7bbd4.jpg?v=1589268514', 
       thrillerDetails: '2017 ‧ Drama ‧ 5 seasons   8.2/10  IMDb', 
       youtubeVideoId: '_InqQJRqGW4' },
    { id: 2, 
      title: 'Young Sheldon', 
      genre: 'Comedy', 
      imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQh596coLT9T-jTk5Xz_qsQymUO1JZuAeWsML4vzG87WxZHivxg', 
      thrillerDetails: '2017 ‧ Sitcom ‧ 7 seasons  7.6/10 · IMDb      ', 
      youtubeVideoId: 'YFStMMcj-RiA' },
      { id: 3, 
        title: 'Loki', 
        genre: 'Comedy', 
        imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHel80alzgYyna6UG8WpsVmyg-rM5f_zl5Ta_UnAHzIFA4nb6l', 
        thrillerDetails: '2021 ‧ Action ‧ 2 seasons  8.2/10  IMDb   ', 
        youtubeVideoId: 'nW948Va-l10' },
        { id: 4, 
          title: 'Squid Game', 
          genre: 'Comedy', 
          imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-IzQZViMaCt9Ufe97-6mRCmPs3T6GYEcFFNIytkzTWUpHCbht', 
          thrillerDetails: '2021 ‧ Thriller ‧ 1 season    8/10   IMDb', 
          youtubeVideoId: 'oqxAJKy0ii4' },
          { id: 5, 
            title: ' Game of Thrones', 
            genre: 'Comedy', 
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5', 
            thrillerDetails: '2011 ‧ Drama ‧ 8 seasons   9.2/10   IMDb', 
            youtubeVideoId: 'KPLWWIOCOOQ' },
            { id: 6, 
              title: 'Breaking Bad', 
              genre: 'Comedy', 
              imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUOnXKnRL0jeo6y4_Nzt0RggJHYbxI_RjJUgCvmdG28BAwpAx', 
              thrillerDetails: '2008 ‧ Drama ‧ 5 seasons   9.5/10  IMDb', 
              youtubeVideoId: 'HhesaQXLuRY' },
              { id: 7, 
                title: 'Gen V', 
                genre: 'Comedy', 
                imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTucWwlj6i5rksLQLcI8yd6SjTeTmR0Q6zEQChiIOuUIdEsVbyT', 
                thrillerDetails: '2023 ‧ Drama ‧ 1 season   7.8/10  IMDb                ', 
                youtubeVideoId: 'mmkLMXN_lpI' },
                { id: 8, 
                  title: 'Man Vs Bee', 
                  genre: 'Comedy', 
                  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzwERhLXfjXo94shBQyXnF2kP9PAlGiiI0ee2J5KQSOoAgMmO6', 
                  thrillerDetails: '2022 ‧ Comedy ‧ 1 season   6.7/10  IMDb', 
                  youtubeVideoId: 'YQ1vN_91KO0' },
                  { id: 9, 
                    title: 'You', 
                    genre: 'Comedy', 
                    imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSkvHYFHnrJHQ-sUGFXwm9B6U_jeIM1kce3pJOKAqwEabkw-8wJ', 
                    thrillerDetails: '2018 ‧ Thriller ‧ 4 seasons  7.7/10  IMDb             ', 
                    youtubeVideoId: '3COY_HrMngc' },
                    { id: 10, 
                      title: 'Never Have I Ever', 
                      genre: 'Comedy', 
                      imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR6gi7BpLC-jLL7Fn8RziwsDk955Vqy0g6VpqySbAUHGBn-yQUu', 
                      thrillerDetails: '2020 ‧ Drama ‧ 4 seasons  7.9/10  IMDb  ', 
                      youtubeVideoId: 'HyOCCCbxwMQ' },
                      { id: 11, 
                        title: 'Wednesday', 
                        genre: 'Comedy', 
                        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMvzTK3P4utQeyTN-LXqnSI0RVoqvqxT50J6jbX61_vBydTUS', 
                        thrillerDetails: '2022 ‧ Horror ‧ 1 season   8.1/10  IMDb', 
                        youtubeVideoId: 'Di310WS8zLk' },
                        { id: 12, 
                          title: 'Beef', 
                          genre: 'Comedy', 
                          imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPun_5G7AFJS38W9_7OFbfhoKJDUpzKJ__5T1lP2VLq3cEtwpp', 
                          thrillerDetails: '2023 ‧ Drama ‧ 1 season  8/10   IMDb', 
                          youtubeVideoId: 'AFPIMHBzGDs' },
                          { id: 13, 
                            title: 'The Simpsons', 
                            genre: 'Comedy', 
                            imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-dq_GzrV9ZZ4pq0ma3gjus8z3jk5c5hukLrcoaoY0ApOJAk8A', 
                            thrillerDetails: '1989 ‧ Sitcom ‧ 35 seasons  8.7/10  IMDb   ', 
                            youtubeVideoId: '3R1ebDCv7vM' },
                            { id: 14, 
                              title: 'Lupin', 
                              genre: 'Comedy', 
                              imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQaP8TqXAxW2gsObYG6un9xMX9rOYGP3Pgyg8CRaEbhNLnTGO7j', 
                              thrillerDetails: '2021 ‧ Thriller ‧ 3 seasons 7.5/10   IMDb    ', 
                              youtubeVideoId: 'ga0iTWXCGa0' },
                              { id: 15, 
                                title: 'Hijack', 
                                genre: 'Comedy', 
                                imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT8HalbL8cqyiL7bfsYS59DQ-OfGvAFN3THNmg-TFcEJCYeZ_xN', 
                                thrillerDetails: '2023 ‧ Thriller ‧ 1 season  7.4/10   IMDb', 
                                youtubeVideoId: 'WxwKzsklvJo' },
                                { id: 16, 
                                  title: 'Twisted Metal', 
                                  genre: 'Comedy', 
                                  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCMA6IpmDk4Hq33WIs7Cg6QKFtlgYvNA09dbCpk6Ko1pVp9o8X', 
                                  thrillerDetails: '2023 ‧ Action ‧ 1 season   7.4/10  IMDb     ', 
                                  youtubeVideoId: '-Mn4RBWv03A' },
                              
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
    
      <h2>TV Shows</h2>
      <div className="movie-list">
        {tvshows.map((movie) => (
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

export default TVShowsPage;
