import { Component } from '@angular/core';

@Component({
  selector: 'app-server-node',
  standalone: true,
  imports: [],
  templateUrl: './server-node.component.html',
  styleUrl: './server-node.component.scss'
})
export class ServerNodeComponent {
  vulnerabilityData = {
    title: "Lorem Ipsum Dolor Sit",
    ipAddresses: [
      "1.2.3.4",
      "1.2.3.4",
      "1.2.3.4",
      "1.2.3.4",
      "1.2.3.4",
      "1.2.3.4",
    ],
    additionalInfo: "Lorem: 1.2.3.4",
  };
}
