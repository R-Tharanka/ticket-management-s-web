package com.example.demo.model;

import com.example.demo.service.TicketPool;

import java.math.BigDecimal;

public class Vendor implements Runnable {
    private final int totalTicketsToAdd;
    private final int ticketReleaseRate;
    private final TicketPool ticketPool;

    public Vendor(int totalTicketsToAdd, int ticketReleaseRate, TicketPool ticketPool) {
        this.totalTicketsToAdd = totalTicketsToAdd;
        this.ticketReleaseRate = ticketReleaseRate;
        this.ticketPool = ticketPool;
    }

    @Override
    public void run() {
        int addedTickets = 0;
        while (addedTickets < totalTicketsToAdd) {
            if (ticketPool.getRemainingTicketsToAdd() == 0) break;
            Ticket ticket = new Ticket(addedTickets + 1, "Event #" + (addedTickets + 1), new BigDecimal("100.00"));
            ticketPool.addTicket(ticket);
            addedTickets++;
            try {
                Thread.sleep(ticketReleaseRate * 1000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
        System.out.println(Thread.currentThread().getName() + " finished adding tickets.");
    }
}
