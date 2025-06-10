
import React from 'react';
import { Link } from 'react-router-dom';
import { Event } from '../types';
import { CalendarIcon } from './icons/CalendarIcon';
import { LocationIcon } from './icons/LocationIcon';
import { TicketIcon } from './icons/TicketIcon';
import { Button } from './Button';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col">
      <img 
        src={event.imageUrl || `https://picsum.photos/seed/${event.id}/400/200`} 
        alt={event.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-neutral-darkest mb-2">{event.name}</h3>
        <div className="space-y-2 text-sm text-neutral-dark mb-3">
          <p className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-2 text-primary" />
            {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
          </p>
          <p className="flex items-center">
            <LocationIcon className="w-4 h-4 mr-2 text-primary" />
            {event.location}
          </p>
          {event.category && <p className="text-xs text-neutral-dark bg-neutral-light inline-block px-2 py-1 rounded">{event.category}</p>}
        </div>
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-bold text-primary">
              {event.price > 0 ? `${event.currency} ${event.price.toFixed(2)}` : 'Free'}
            </p>
            <p className="text-sm text-neutral-dark flex items-center">
              <TicketIcon className="w-4 h-4 mr-1 text-secondary" /> {event.ticketsAvailable} left
            </p>
          </div>
          <Link to={`/event/${event.id}`}>
            <Button fullWidth variant="primary">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
