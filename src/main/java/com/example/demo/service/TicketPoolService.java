package com.example.demo.service;

import com.example.demo.model.Customer;
import com.example.demo.model.Ticket;
import com.example.demo.model.Vendor;
import org.springframework.stereotype.Service;

@Service
public class TicketPoolService {

    private TicketPool ticketPool;
    private Thread[] vendorThreads;
    private Thread[] customerThreads;
    private boolean systemRunning = false;

    public synchronized String configureSystem(int totalTickets, int maxCapacity, int releaseRate, int retrievalRate) {
        ticketPool = new TicketPool(totalTickets, maxCapacity);
        vendorThreads = new Thread[5];
        customerThreads = new Thread[5];

        for (int i = 0; i < 5; i++) {
            vendorThreads[i] = new Thread(new Vendor(totalTickets / 5, releaseRate, ticketPool), "Vendor " + i);
            customerThreads[i] = new Thread(new Customer(ticketPool, retrievalRate), "Customer " + i);
        }
        return "System configured successfully!";
    }

    public synchronized String startSystem() {
        if (systemRunning) return "System already running!";
        for (Thread vendorThread : vendorThreads) vendorThread.start();
        for (Thread customerThread : customerThreads) customerThread.start();
        systemRunning = true;
        return "System started!";
    }

    public synchronized String stopSystem() {
        if (!systemRunning) return "System is not running!";
        for (Thread vendorThread : vendorThreads) vendorThread.interrupt();
        for (Thread customerThread : customerThreads) customerThread.interrupt();
        systemRunning = false;
        return "System stopped!";
    }

    public synchronized String getStatus() {
        return String.format("Tickets in Pool: %d, Tickets Sold: %d, Remaining to Add: %d",
                ticketPool.getPoolSize(), ticketPool.getTicketsSold(), ticketPool.getRemainingTicketsToAdd());
    }
}
