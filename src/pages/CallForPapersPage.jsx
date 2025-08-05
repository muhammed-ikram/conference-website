// src/pages/CallForPapersPage.js
import React from 'react';
import SimpleFooter from '../components/SimpleFooter';
import DetailedFooter from '../components/DetailedFooter';

function CallForPapersPage() {
  const theme1 = [
    
    "Climate-resilient and disaster-resistant infrastructure design",
    "Reliability-based approaches in pavements and structural systems",
    "Retrofitting and rehabilitation of aging civil infrastructure",
    "Resilient transportation systems for extreme environmental conditions",
  ];

  const theme2 = [
    "High-performance, fiber-reinforced, and eco-friendly concretes",
    "Utilization of recycled, waste, and industrial by-product materials",
    "Low-carbon cement alternatives and sustainable binders",
    "Lifecycle performance and durability studies of construction materials"
    
  ];

  const theme3 = [
    "AI and Machine Learning in structural health monitoring",
    "Digital twins, BIM, and predictive modeling in infrastructure",
    "GIS, UAVs, and sensor technologies in planning and monitoring",
    "Automation and robotics in smart construction systems",
  ];

  const theme4 = [
    "Intelligent Transportation Systems (ITS) and traffic management",
    "Sustainable pavement design, materials, and performance modeling",
    "Integration of public transport and multimodal planning",
    "Smart mobility and low-emission transportation infrastructure",
  ];

  const theme5 = [
    "Frameworks and policies for sustainable urban and transport development",
    "Promoting SDGs and sustainability in civil engineering education",
    "Community participation and disaster risk reduction strategies",
    "Governance models for smart and green infrastructure implementation",
  ];

  return (
    <div className="call-for-papers-page">
      <div className="cfp-content">
        <p className="cfp-intro-text">
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
            About the Conference: (ICCMS-2025) <br />
          </span>{' '}
          The Department of Civil Engineering at Srinivasa Ramanujan Institute of Technology (Autonomous), Ananthapuramu, is proud to host a National Conference under the AICTE – VAANI (Vibrant Advocacy for Advancement and Nurturing of Indian Languages) Scheme, titled:
        </p>
        <h4 class ="dialog">Next Generation Construction with Sustainable, Resilient, and Smart Civil Engineering" (NCSRSC–2025)</h4> <br />
        <p style={{ fontSize: '1.2rem' }}>📅 September 18–19, 2025 <br />
This bilingual conference (Telugu & English) aims to foster the creation and dissemination of technical knowledge in regional languages, particularly Telugu, thereby enhancing accessibility and inclusiveness in technical education. It aligns with the National Education Policy (NEP) and the Viksit Bharat 2047 vision of creating a self-reliant, knowledge-driven India.
The event will serve as a platform for academicians, researchers, industry professionals, and students to exchange innovative ideas, explore emerging materials and technologies in civil engineering, and contribute to the creation of a sustainable built environment. Special emphasis will be placed on climate-resilient infrastructure, eco-friendly construction practices, and industry-academia collaboration through technical sessions, discussions, and presentations.
As a core outcome, the conference will encourage publication of research papers in Telugu and English, and release <b>ISBN-certified bilingual proceedings.</b>
</p>
        <p className="cfp-themes-heading">Papers should be submitted only on the following themes:</p>

        <div className='themes-conf'>
          <h2>Conference Themes</h2>
          <ul>
            <li>	Sustainable Civil Engineering Practices</li>
            <li>	Resilient Infrastructure Systems</li>
            <li>	Smart Construction Technologies</li>
            <li>Structural Engineering Innovations</li>
            <li>	Transportation and Traffic Engineering</li>
            <li>	Environmental Engineering and Climate Solutions</li>
            <li>	Geotechnical Engineering and Ground Improvement</li>
            <li>	Water Resources and Irrigation Engineering</li>
            <li>Construction Management and Safety</li>
            <li>Urban Planning and Smart Cities</li>
            <li>Civil Engineering Education and Policy</li>
          </ul>

          <h2>Guide Lines</h2>
          <ul>
            <li>	Mode of Presentation: Offline</li>
            <li>	Reseach papers are invited from postgraduate students, faculty members, innovators, industry professionals and researchers</li>
            <li>	Papers submitted for Conference should be presented in bilingual language (Telugu and English).</li>
            <li>Number of pages should not exceed 5 pages including references.</li>
            <li> A Digital Certificate by the ATAL Academy will be issued to the participants, who have an attendance of minimum 80%.</li>
    
          </ul>

          
          {/* <div className="cfp-theme-column">
            <h4>Theme 1<br />Sustainable and Resilient Infrastructure</h4>
            <ul style={{ counterReset: 'list-item' }}>
              {theme1.map((item, index) => (
                <li key={index}> 	&#xf105; {item}</li>
              ))}
            </ul>
          </div> */}

          {/* <div className="cfp-theme-column">
            <h4>Theme 2<br />Green and Advanced Construction Materials</h4>
            <ul style={{ counterReset: 'list-item' }}>
              {theme2.map((item, index) => (
                <li key={index}>&#xf105; {item}</li>
              ))}
            </ul>
          </div> */}

          {/* <div className="cfp-theme-column">
            <h4>Theme 3<br />Smart Technologies and Digitalization in Civil Engineering</h4>
            <ul style={{ counterReset: 'list-item' }}>
              {theme3.map((item, index) => (
                <li key={index}>&#xf105; {item}</li>
              ))}
            </ul>
          </div> */}

          {/* <div className="cfp-theme-column">
            <h4>Theme 4<br />Sustainable Transportation and Mobility Solutions</h4>
            <ul style={{ counterReset: 'list-item' }}>
              {theme4.map((item, index) => (
                <li key={index}>&#xf105; {item}</li>
              ))}
            </ul>
          </div> */}

          {/* <div className="cfp-theme-column">
            <h4>Theme 5<br />Policy, Governance, and Education for Sustainable Development</h4>
            <ul style={{ counterReset: 'list-item' }}>
              {theme5.map((item, index) => (
                <li key={index}>&#xf105; {item}</li>
              ))}
            </ul>
          </div> */}

          {/* <div>
            <h3>Coordinator</h3>
            <p> <br />
Professor, Civil Engineering Department
Srinivasa Ramanujan Institute of Technology (Autonomous)
Rotary Puram, BK Samudram Mandal
Anantapuramu (Dist.), Andhra Pradesh -515701
</p>
          </div> */}
        </div>

        

        

        

        {/* <div className="cfp-buttons-container">
          <button className="cfp-btn">GET THE TEMPLATES</button>
          <button className="cfp-btn">SUBMIT ABSTRACT</button>
        </div> */}
      </div>


<hr />


    <div className="cfp-content">
        <p className="cfp-intro-text">
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
            సదస్సు గురించి: (ICCMS-2025) <br />
          </span>{' '}
శ్రీనివాస రామానుజన్ ఇన్‌స్టిట్యూట్ ఆఫ్ టెక్నాలజీ (స్వయం ప్రతిపత్తి), అనంతపురం లోని సివిల్ ఇంజనీరింగ్ విభాగం ఆధ్వర్యంలో, AICTE – VAANI (భారతీయ భాషల అభివృద్ధి మరియు పోషణ కోసం ఉత్సాహభరితమైన వాదన) పథకం కింద జాతీయ సదస్సు నిర్వహించబడుతోంది. ఈ సదస్సు పేరు:        </p>
        <h4 class ="dialog">"స్థిరమైన, స్థితిస్థాపకత కలిగిన మరియు స్మార్ట్ సివిల్ ఇంజనీరింగ్‌తో తదుపరి తరం నిర్మాణం" (NCSRSC–2025)</h4> <br />
        <p style={{ fontSize: '1.2rem' }}>📅 18 – 19 సెప్టెంబర్ 2025 <br />
ఈ ద్విభాషా సదస్సు (తెలుగు మరియు ఆంగ్లం) ముఖ్యంగా ప్రాంతీయ భాషలలో సాంకేతిక జ్ఞానాన్ని అభివృద్ధి చేయడం మరియు విద్యా ప్రాప్యతను పెంపొందించడం లక్ష్యంగా పెట్టుకుంది. ఇది జాతీయ విద్యా విధానం (NEP) మరియు విక్సిత్ భారత్ 2047 దిశగా చేపడుతున్న అనేక ప్రాధాన్య అంశాలలో ఒకటి.
ఈ కార్యక్రమం ద్వారా విద్యావేత్తలు, పరిశోధకులు, పరిశ్రమ నిపుణులు మరియు విద్యార్థులు తమ ఆవిష్కరణలు, అభిప్రాయాలు మరియు అనుభవాలను పంచుకునే వేదికను అందించబడుతుంది. ముఖ్యంగా పర్యావరణ అనుకూలమైన నిర్మాణ విధానాలు, వాతావరణ స్థిరత్వాన్ని కలిగిన మౌలిక సదుపాయాలు, మరియు విద్యా-పరిశ్రమ భాగస్వామ్యం పై చర్చలు, ఉపన్యాసాలు నిర్వహించబడతాయి.
ఈ సదస్సు ద్వారా తెలుగు మరియు ఆంగ్ల భాషలలో పరిశోధనా పత్రాల ప్రచురణ ప్రోత్సహించబడుతుంది. అందులో భాగంగా  <b>ISBN నెంబర్ తో కూడిన ద్విభాషా సదస్సు పత్రిక ప్రచురించబడుతుంది.</b>
</p>
        {/* <p className="cfp-themes-heading">Papers should be submitted only on the following themes:</p> */}
<br />
        <div className='themes-conf'>
          <h2>సమావేశ ఇతివృత్తాలు</h2>
          <ul>
            <li>సుస్థిర సివిల్ ఇంజినీరింగ్ విధానాలు</li>
            <li>స్థిరమైన మౌలిక సదుపాయాల వ్యవస్థలు</li>
            <li>నిర్మాణాలలో స్మార్ట్ సాంకేతికతలు</li>
            <li>స్ట్రక్చరల్ ఇంజినీరింగ్ ఆవిష్కరణలు</li>
            <li>రవాణా మరియు ట్రాఫిక్ ఇంజినీరింగ్</li>
            <li>పర్యావరణ ఇంజినీరింగ్ మరియు వాతావరణ పరిష్కారాలు</li>
            <li>భౌగోళిక ఇంజినీరింగ్ మరియు నేల మెరుగుదల</li>
            <li>నీటి వనరులు మరియు సాగునీటి ఇంజినీరింగ్</li>
            <li>నిర్మాణ నిర్వహణ మరియు భద్రత</li>
            <li>నగర ప్రణాళిక మరియు స్మార్ట్ నగరాలు</li>
            <li>సివిల్ ఇంజినీరింగ్ విద్య మరియు విధానాలు</li>
          </ul>

          <h2>మార్గదర్శకాలు:</h2>
          <ul>
            <li>ప్రదర్శన మోడ్: ఆఫ్ లైన్</li>
            <li>పోస్ట్ గ్రాడ్యుయేట్ విద్యార్థులు, అధ్యాపక సభ్యులు, ఆవిష్కర్తలు, పరిశ్రమ నిపుణులు మరియు పరిశోధకుల నుండి పున each పత్రాలు ఆహ్వానించబడ్డాయి</li>
            <li>కాన్ఫరెన్స్ కోసం సమర్పించిన పేపర్లను ద్విభాషా భాషలో (టెలుగు మరియు ఇంగ్లీష్) సమర్పించాలి.</li>
            <li>పేజీల సంఖ్య సూచనలతో సహా 5 పేజీలకు మించకూడదు.</li>
            <li> ATAL అకాడమీ చేత డిజిటల్ సర్టిఫికేట్ పాల్గొనేవారికి జారీ చేయబడుతుంది, వారికి కనీస 80% హాజరు ఉంటుంది.</li>
    
          </ul>

          
          {/* <div className="cfp-theme-column">
            <h4>Theme 1<br />Sustainable and Resilient Infrastructure</h4>
            <ul style={{ counterReset: 'list-item' }}>
              {theme1.map((item, index) => (
                <li key={index}> 	&#xf105; {item}</li>
              ))}
            </ul>
          </div> */}

          {/* <div className="cfp-theme-column">
            <h4>Theme 2<br />Green and Advanced Construction Materials</h4>
            <ul style={{ counterReset: 'list-item' }}>
              {theme2.map((item, index) => (
                <li key={index}>&#xf105; {item}</li>
              ))}
            </ul>
          </div> */}

          {/* <div className="cfp-theme-column">
            <h4>Theme 3<br />Smart Technologies and Digitalization in Civil Engineering</h4>
            <ul style={{ counterReset: 'list-item' }}>
              {theme3.map((item, index) => (
                <li key={index}>&#xf105; {item}</li>
              ))}
            </ul>
          </div> */}

          {/* <div className="cfp-theme-column">
            <h4>Theme 4<br />Sustainable Transportation and Mobility Solutions</h4>
            <ul style={{ counterReset: 'list-item' }}>
              {theme4.map((item, index) => (
                <li key={index}>&#xf105; {item}</li>
              ))}
            </ul>
          </div> */}

          {/* <div className="cfp-theme-column">
            <h4>Theme 5<br />Policy, Governance, and Education for Sustainable Development</h4>
            <ul style={{ counterReset: 'list-item' }}>
              {theme5.map((item, index) => (
                <li key={index}>&#xf105; {item}</li>
              ))}
            </ul>
          </div> */}

          {/* <div>
            <h3>Coordinator</h3>
            <p> <br />
Professor, Civil Engineering Department
Srinivasa Ramanujan Institute of Technology (Autonomous)
Rotary Puram, BK Samudram Mandal
Anantapuramu (Dist.), Andhra Pradesh -515701
</p>
          </div> */}
        </div>

        

        

        

        {/* <div className="cfp-buttons-container">
          <button className="cfp-btn">GET THE TEMPLATES</button>
          <button className="cfp-btn">SUBMIT ABSTRACT</button>
        </div> */}
      </div>



      <DetailedFooter />
    </div>




  

  );
}

export default CallForPapersPage;