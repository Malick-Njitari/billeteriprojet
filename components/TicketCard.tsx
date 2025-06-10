
import React from 'react';
import { Ticket } from '../types';
import { CalendarIcon } from './icons/CalendarIcon';
import { LocationIcon } from './icons/LocationIcon';
import { QrCodeIcon } from './icons/QrCodeIcon'; // Assuming you create this icon

interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  return (
    <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-lg shadow-xl p-6 m-4 w-full max-w-md mx-auto relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
      <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-white/5 rounded-full"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold">{ticket.eventName}</h3>
            <p className="text-sm opacity-80">Official Event Ticket</p>
          </div>
          <div className="text-right">
            <p className="text-xs opacity-80">Serial No.</p>
            <p className="font-mono text-sm">{ticket.serialNumber}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-xs opacity-80 mb-1">Attendee</p>
            <p className="font-semibold">{ticket.userName}</p>
          </div>
          <div className="text-right">
            <p className="text-xs opacity-80 mb-1">Purchased On</p>
            <p className="font-semibold">{new Date(ticket.purchaseDate).toLocaleDateString()}</p>
          </div>
        </div>
        
        <div className="mb-6 space-y-2">
          <p className="flex items-center text-sm">
            <CalendarIcon className="w-4 h-4 mr-2 opacity-80" />
            {new Date(ticket.eventDate).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
          </p>
          <p className="flex items-center text-sm">
            <LocationIcon className="w-4 h-4 mr-2 opacity-80" />
            {ticket.eventLocation}
          </p>
        </div>

        <div className="border-t border-dashed border-white/30 pt-4 flex items-center justify-center">
            {ticket.qrCodeUrl ? (
                <img src={ticket.qrCodeUrl} alt="QR Code" className="w-24 h-24 bg-white p-1 rounded-md" />
            ) : (
                <div className="w-24 h-24 bg-white p-1 rounded-md flex items-center justify-center text-neutral-darkest">
                    <QrCodeIcon className="w-16 h-16" />
                </div>
            )}
             <p className="ml-4 text-sm text-center opacity-90">Present this ticket at the event entrance.</p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
