import { Component } from '@angular/core';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [],
  templateUrl: './code.component.html',
  styleUrl: './code.component.css'
})
export class CodeComponent {
code = `

import Link from &#x27;next/link&#x27;;
import { Navbar } from &#x27;flowbite-react&#x27;;

function Component() {
  return (
    &#x3C;Navbar fluid rounded&#x3E;
      &#x3C;Navbar.Brand as={Link} href=&#x22;https://flowbite-react.com&#x22;&#x3E;
        &#x3C;img src=&#x22;/favicon.svg&#x22; className=&#x22;mr-3 h-6 sm:h-9&#x22; alt=&#x22;Flowbite React Logo&#x22; /&#x3E;
        &#x3C;span className=&#x22;self-center whitespace-nowrap text-xl font-semibold dark:text-white&#x22;&#x3E;Flowbite React&#x3C;/span&#x3E;
      &#x3C;/Navbar.Brand&#x3E;
      &#x3C;Navbar.Toggle /&#x3E;
      &#x3C;Navbar.Collapse&#x3E;
        &#x3C;Navbar.Link href=&#x22;#&#x22; active&#x3E;
          Home
        &#x3C;/Navbar.Link&#x3E;
        &#x3C;Navbar.Link as={Link} href=&#x22;#&#x22;&#x3E;
          About
        &#x3C;/Navbar.Link&#x3E;
        &#x3C;Navbar.Link href=&#x22;#&#x22;&#x3E;Services&#x3C;/Navbar.Link&#x3E;
        &#x3C;Navbar.Link href=&#x22;#&#x22;&#x3E;Pricing&#x3C;/Navbar.Link&#x3E;
        &#x3C;Navbar.Link href=&#x22;#&#x22;&#x3E;Contact&#x3C;/Navbar.Link&#x3E;
      &#x3C;/Navbar.Collapse&#x3E;
    &#x3C;/Navbar&#x3E;
  );
}
`;
}
