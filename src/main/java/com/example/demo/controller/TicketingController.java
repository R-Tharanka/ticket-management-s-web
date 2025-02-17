package com.example.demo.controller;

import com.example.demo.service.TicketPoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/ticketing")
public class TicketingController {

    private final TicketPoolService ticketPoolService;

    @Autowired
    public TicketingController(TicketPoolService ticketPoolService) {
        this.ticketPoolService = ticketPoolService;
    }

    @PostMapping("/configure")
    public String configureSystem(@RequestBody ConfigRequest config) {
        return ticketPoolService.configureSystem(config.totalTickets, config.maxCapacity, config.releaseRate, config.retrievalRate);
    }

    @GetMapping("/start")
    public String startSystem() {
        return ticketPoolService.startSystem();
    }

    @GetMapping("/status")
    public String viewTicketPoolStatus() {
        return ticketPoolService.getStatus();
    }

    @GetMapping("/stop")
    public String stopSystem() {
        return ticketPoolService.stopSystem();
    }

    static class ConfigRequest {
        public int totalTickets;
        public int releaseRate;
        public int retrievalRate;
        public int maxCapacity;
    }
}
