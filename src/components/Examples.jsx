import { useState } from "react";
import ExampleTab from '../components/ExampleTab/ExampleTab.jsx';

const Examples = () => {
    const tabs = [
        { title: "Components" },
        { title: "JSX" },
        { title: "Props" },
        { title: "State" }
      ];
    
      const EXAMPLES = {
        components: {
          title: 'Components',
          description:
            'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
          code: `
      function Welcome() {
        return <h1>Hello, World!</h1>;
      }`,
        },
        jsx: {
          title: 'JSX',
          description:
            'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
          code: `
      <div>
        <h1>Welcome {userName}</h1>
        <p>Time to learn React!</p>
      </div>`,
        },
        props: {
          title: 'Props',
          description:
            'Components accept arbitrary inputs called props. They are like function arguments.',
          code: `
      function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }`,
        },
        state: {
          title: 'State',
          description:
            'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
          code: `
      function Counter() {
        const [isVisible, setIsVisible] = useState(false);
      
        function handleClick() {
          setIsVisible(true);
        }
      
        return (
          <div>
            <button onClick={handleClick}>Show Details</button>
            {isVisible && <p>Amazing details!</p>}
          </div>
        );
      }`,
        },
      };
    
      // Extracting the first title from the tabs array
      const firstTabTitle = tabs.length > 0 ? tabs[0].title.toLowerCase().replace(/\s/g, '') : '';
    
      // Using the first tab title as the default state
      const [tabValueInitial, tabValueChanged] = useState(firstTabTitle);
    
      function handleTabClick(title) {
        tabValueChanged(title);
      }

    return (
        <section id="examples">
            <h2>Time to get started!</h2>
            <menu>
            <ExampleTab tabs={tabs} isSelected={tabValueInitial} handleTabClick={handleTabClick} />
            </menu>
            <div id="tab-content">
            <h3>{EXAMPLES[tabValueInitial].title}</h3>
            <p>{EXAMPLES[tabValueInitial].description}</p>
            <pre>
                <code>{EXAMPLES[tabValueInitial].code}</code>
            </pre>
            </div>
        </section>
    );
} 

export default Examples;