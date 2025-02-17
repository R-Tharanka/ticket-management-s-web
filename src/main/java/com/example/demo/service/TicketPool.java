package com.example.demo.service;

import com.example.demo.model.Ticket;

import java.util.LinkedList;
import java.util.Queue;

public class TicketPool {
    private final int maximumCapacity;
    private final Queue<Ticket> ticketQueue;
    private int remainingTicketsToAdd;
    private int ticketsSold;

    public TicketPool(int totalTickets, int maximumCapacity) {
        this.remainingTicketsToAdd = totalTickets;
        this.maximumCapacity = maximumCapacity;
        this.ticketQueue = new LinkedList<>();
        this.ticketsSold = 0;
    }

    public synchronized void addTicket(Ticket ticket) {
        while (ticketQueue.size() >= maximumCapacity) {
            try {
                System.out.println(Thread.currentThread().getName() + " waiting to add ticket...");
                wait();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return;
            }
        }
        ticketQueue.add(ticket);
        remainingTicketsToAdd--;
        System.out.println(Thread.currentThread().getName() + " added ticket. Remaining: " + remainingTicketsToAdd);
        notifyAll();
    }

    public synchronized Ticket buyTicket() {
        while (ticketQueue.isEmpty() && remainingTicketsToAdd > 0) {
            try {
                System.out.println(Thread.currentThread().getName() + " waiting to buy ticket...");
                wait();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return null;
            }
        }
        if (ticketQueue.isEmpty()) return null;
        ticketsSold++;
        System.out.println(Thread.currentThread().getName() + " bought a ticket. Tickets sold: " + ticketsSold);
        notifyAll();
        return ticketQueue.poll();
    }

    public synchronized int getPoolSize() {
        return ticketQueue.size();
    }

    public synchronized int getRemainingTicketsToAdd() {
        return remainingTicketsToAdd;
    }

    public synchronized int getTicketsSold() {
        return ticketsSold;
    }
}
