import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

import banner from '../assets/one.webp'

const ImgLayer = styled(motion.img)`
  position: fixed;
  width: 100%;
  height: 405px;
  background-color: #00000000;
  object-fit: cover;
  object-position: 30% 0%;
  z-index: -1;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  width: 100%;
  height: 405px;
  background-color: #00000000;
  z-index: 1;
  h2 {
    margin-top: 180px;
    margin-left: 82px;
    margin-bottom: 25px;
    padding: 9px;
    padding-left: 18px;
    padding-right: 18px;
    font-size: 2.5em;
    font-weight: 400;
    letter-spacing: 6px;
    color: #ffffff;
  }
  p {
    margin-left: 82px;
    margin-right: 82px;
    padding: 19px;
    font-size: 1em;
    letter-spacing: 1.25px;
    color: #ffffff;
  }
  @media screen and (max-width: 1650px) {
    height: 280px;
    h2 {
      margin-top: 120px;
      margin-bottom: 0px;
      margin-left: 40px;
      font-size: 1.8em;
    }
    p {
      margin-left: 40px;
      margin-right: 82px;
      padding: 19px;
      font-size: 1em;
      letter-spacing: 1.25px;
      color: #ffffff;
    }
  }
  @media screen and (max-width: 850px) {
    height: 260px;
    h2 {
      margin-top: 120px;
      margin-bottom: 0px;
      margin-left: 40px;
      font-size: 1.8em;
    }
    p {
      margin-left: 40px;
      margin-right: 82px;
      padding: 19px;
      font-size: 1em;
      letter-spacing: 1.25px;
      color: #ffffff;
    }
  }
`;

const LinkBox = styled.section`
  width: 100%;
  height: 2300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  h3 {
    margin: 8px;
    margin-top: 50px;
    font-size: 1.4em;
    font-weight: 800;
    letter-spacing: 1px;
  }
  p {
    margin: 10px;
    width: 30%;
    font-size: .9em;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
  }
  div {
    margin: 100px;
    width: 50%;
    height: 1900px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 5px;
      width: 50%;
      h4 {
        margin: 8px;
        font-size: 1.2em;
        font-weight: 600;
        letter-spacing: 1px;
        text-align: center;
      }
      a {
        margin: 2px;
        font-size: .9em;
        font-weight: 400;
        line-height: 20px;
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 1700px) {
    div {
      width: 80%;
    }
  }
  @media screen and (max-width: 1026px) {
    height: 100%;
    p {
      width: 80%;
    }
    div {
      article {
        a {
          line-height: 18px;
        }
      }
    }
  }
  @media screen and (max-width: 786px) {
    height: 100%;
    div {
      flex-wrap: none;
      height: 100%;
      article {
        width: 100%;
      }
    }
  }
`

export default function Resources() {
  return (
    <>
      <ImgLayer src={banner} />
      <HeaderSection>
        <h2>Resources</h2>
        <p>Learn more about what to expect.</p>
      </HeaderSection>
      <LinkBox>
        <h3>Mental Health Links</h3>
        <p>The following links are listed by family therapist Jeanne Teleia to provide you with additional online mental health care information and counseling resources.</p>
        <div>
          <article>
            <h4>Addiction and Recovery</h4>
            <a href="http://www.alcoholics-anonymous.org/?Media=PlayFlash" target="_blank" rel="noopener noreferrer">Alcoholics Anonymous</a>
            <a href="http://www.careflorida.com/learn_about-_addiction_and_drug-recovery/helpful-articles/aa-recovery-resources.html" target="_blank" rel="noopener noreferrer">Alcoholics Anonymous Recovery Resources</a>
            <a href="http://netaddiction.com/" target="_blank" rel="noopener noreferrer">Center for On-Line Addiction</a>
            <a href="http://www.samhsa.gov/prevention/" target="_blank" rel="noopener noreferrer">SAMHSA's Substance Abuse/Addiction </a>
            <a href="http://www.samhsa.gov/treatment/" target="_blank" rel="noopener noreferrer">SAMHSA's Treatment and Recovery </a>
            <a href="http://www.well.com/user/woa/" target="_blank" rel="noopener noreferrer">Web of Addictions</a>
          </article>
          <article>
            <h4>Anxiety Disorders</h4>
            <a href="http://www.apa.org/topics/anxiety/panic-disorder.aspx" target="_blank" rel="noopener noreferrer">Answers to Your Questions About Panic Disorder </a>
            <a href="http://www.ptsd.va.gov/" target="_blank" rel="noopener noreferrer">National Center for PTSD </a>
            <a href="http://www.miminc.org/aboutocic.asp/" target="_blank" rel="noopener noreferrer">Obsessive Compulsive Information Center Calm Clinic</a>
          </article>
          <article>
            <h4>Associations & Institutes</h4>
            <a href="http://www.aacap.org/" target="_blank" rel="noopener noreferrer">American Academy of Child & Adolescent Psychiatry</a>
            <a href="http://www.aamft.org/iMIS15/AAMFT/" target="_blank" rel="noopener noreferrer">American Association for Marriage and Family Therapy </a>
            <a href="http://www.counseling.org/" target="_blank" rel="noopener noreferrer">American Counseling Association </a>
            <a href="http://www.psych.org/" target="_blank" rel="noopener noreferrer">American Psychiatric Association </a>
            <a href="http://www.apa.org/" target="_blank" rel="noopener noreferrer">American Psychological Association</a>
            <a href="http://www.psychologicalscience.org/" target="_blank" rel="noopener noreferrer">American Psychological Society </a>
            <a href="http://www.cmha.ca/" target="_blank" rel="noopener noreferrer">Canadian Mental Health Association</a>
            <a href="http://beta.samhsa.gov/about-us" target="_blank" rel="noopener noreferrer">Center for Mental Health Services </a>
            <a href="http://www.nimh.nih.gov/index.shtml" target="_blank" rel="noopener noreferrer">National Institute of Mental Health </a>
            <a href="http://www.mentalhealthamerica.net/" target="_blank" rel="noopener noreferrer">National Mental Health Association </a>
            <a href="http://www.samhsa.gov/" target="_blank" rel="noopener noreferrer">Substance Abuse and Mental Health Services Administration</a>
          </article>
          <article>
            <h4>Attention-Deficit Hyperactivity Disorder</h4>
            <a href="http://www.add.org/" target="_blank" rel="noopener noreferrer">ADDA - Attention Deficit Disorder Association </a>
            <a href="http://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd/index.shtml" target="_blank" rel="noopener noreferrer">Attention-Deficit Hyperactivity Disorder, NIMH </a>
            <a href="http://borntoexplore.org/" target="_blank" rel="noopener noreferrer">Born to Explore: The Other Side of ADD/ADHD</a>
          </article>
          <article>
            <h4>Child Abuse and Domestic Violence</h4>
            <a href="http://www.childhelp.org/" target="_blank" rel="noopener noreferrer">Childhelp USA® </a>
            <a href="http://www.samhsa.gov/families/index.aspx" target="_blank" rel="noopener noreferrer">SAMHSA's Children and Families</a>
            <a href="http://www.samhsa.gov/publicAwareness/" target="_blank" rel="noopener noreferrer">SAMHSA's Protection and Advocacy </a>
            <a href="http://www.apa.org/topics/trauma/memories.aspx" target="_blank" rel="noopener noreferrer">Questions and Answers about Memories of Childhood Abuse </a>
            <a href="http://www.thehotline.org/" target="_blank" rel="noopener noreferrer">The National Domestic Violence Hotline Website </a>
            <a href="http://www.thehotline.org/" target="_blank" rel="noopener noreferrer">Women, Violence and Trauma</a>
          </article>
          <article>
            <h4>Chronic Fatigue</h4>
            <a href="http://www.cdc.gov/cfs/" target="_blank" rel="noopener noreferrer">Chronic Fatigue Syndrome</a>
          </article>
          <article>
            <h4>Depression </h4>
            <a href="http://www.pendulum.org/" target="_blank" rel="noopener noreferrer">Bipolar Disorder News - Pendulum.org </a>
            <a href="http://www.apa.org/topics/depress/recover.aspx" target="_blank" rel="noopener noreferrer">Depression and How Therapy Can Help </a>
            <a href="http://www.mentalhealthamerica.net/mental-health-screen" target="_blank" rel="noopener noreferrer">Depression Screening </a>
            <a href="http://www.sharecare.com/health/stress-reduction" target="_blank" rel="noopener noreferrer">Depression Test, Symptoms of Depression, Signs of Depression</a>
          </article>
          <article>
            <h4>Developmental Disorders</h4>
            <a href="http://www.ninds.nih.gov/disorders/asperger/asperger.htm" target="_blank" rel="noopener noreferrer">Asperger's Disorder </a>
            <a href="http://spinwarp.ucsd.edu/NeuroWeb/" target="_blank" rel="noopener noreferrer">NeuroWeb </a>
            <a href="http://medicine.yale.edu/childstudy/index.aspx" target="_blank" rel="noopener noreferrer">Pervasive Developmental Disorders</a>
          </article>
          <article>
            <h4>Diagnosis</h4>
            <a href="http://behavenet.com/diagnostic-and-statistical-manual-mental-disorders-fourth-edition-text-revision#301" target="_blank" rel="noopener noreferrer">DSM-IV-TR: Diagnoses and Criteria</a>
          </article>
          <article>
            <h4>Dissociation and Traumatic Stress</h4>
            <a href="http://www.sidran.org/" target="_blank" rel="noopener noreferrer">Sidran Foundation Home Page</a>
          </article>
          <article>
            <h4>Eating Disorders </h4>
            <a href="http://www.eatright.org/" target="_blank" rel="noopener noreferrer">American Dietetic Association</a>
            <a href="http://www.something-fishy.org/" target="_blank" rel="noopener noreferrer">Something Fishy</a>
          </article>
          <article>
            <h4>Journals & Magazines</h4>
            <a href="http://www.addwarehouse.com/shopsite_sc/store/html/product311.html" target="_blank" rel="noopener noreferrer">ADHD Report </a>
            <a href="http://www.tandf.co.uk/journals/titles/10615806.html" target="_blank" rel="noopener noreferrer">Anxiety, Stress and Coping </a>
            <a href="http://www.sagepub.com/journalsProdDesc.nav?prodId=Journal200822" target="_blank" rel="noopener noreferrer">Autism </a>
            <a href="http://www.sagepub.com/journalsProdDesc.nav?prodId=Journal200979" target="_blank" rel="noopener noreferrer">Childhood </a>
            <a href="http://onlinelibrary.wiley.com/journal/10.1002/%28ISSN%291557-0711" target="_blank" rel="noopener noreferrer">Contemporary Hypnosis </a>
            <a href="http://www.sagepub.com/journalsProdDesc.nav?prodId=Journal201266" target="_blank" rel="noopener noreferrer">Dementia </a>
            <a href="http://onlinelibrary.wiley.com/journal/10.1002/(ISSN)1520-6394" target="_blank" rel="noopener noreferrer">Depression and Anxiety </a>
            <a href="http://www.springer.com/psychology/book/978-1-4614-6466-2" target="_blank" rel="noopener noreferrer">Dreaming </a>
            <a href="http://onlinelibrary.wiley.com/journal/10.1111/%28ISSN%291465-3362" target="_blank" rel="noopener noreferrer">Drug and Alcohol Review </a>
            <a href="http://onlinelibrary.wiley.com/journal/10.1002/(ISSN)1099-0909" target="_blank" rel="noopener noreferrer">Dyslexia </a>
            <a href="http://www.tandfonline.com/toc/gecd20/current#.Uvkjj_ldXy4" target="_blank" rel="noopener noreferrer">Early Child Development and Care </a>
            <a href="http://www.tandfonline.com/toc/uedi20/current#.UvkjsPldXy4" target="_blank" rel="noopener noreferrer">Eating Disorders </a>
            <a href="http://www.springer.com/education+%26+language/journal/11092" target="_blank" rel="noopener noreferrer">Educational Assessment </a>
            <a href="http://www.springer.com/medicine/psychiatry/journal/10899" target="_blank" rel="noopener noreferrer">Journal of Gambling Studies </a>
            <a href="http://www.springer.com/social+sciences/wellbeing+%26+quality-of-life/journal/10902" target="_blank" rel="noopener noreferrer">Journal of Happiness Studies </a>
            <a href="http://www.tandfonline.com/toc/camh20/current#.UvkkU_ldXy4" target="_blank" rel="noopener noreferrer">Journal of Mental Health and Aging </a>
            <a href="http://www.tandfonline.com/toc/usmt20/current#.UvkkrPldXy4" target="_blank" rel="noopener noreferrer">Journal of Sex & Marital Therapy </a>
            <a href="http://journals.humankinetics.com/JSEP" target="_blank" rel="noopener noreferrer">Journal of Sport and Exercise Psychology </a>
            <a href="http://www.journals.elsevier.com/journal-of-substance-abuse-treatment/" target="_blank" rel="noopener noreferrer">Journal of Substance Abuse Treatment </a>
            <a href="http://www.tandfonline.com/toc/hlld20/current#.UvkokPldXy4" target="_blank" rel="noopener noreferrer">Language Learning and Development </a>
            <a href="http://www.tandfonline.com/toc/wzlg20/current#.Uvkoz_ldXy4" target="_blank" rel="noopener noreferrer">Loss, Grief & Care </a>
            <a href="http://onlinelibrary.wiley.com/journal/10.1002/(ISSN)1940-5529" target="_blank" rel="noopener noreferrer">Mental Retardation and Developmental Disabilities </a>
            <a href="http://www.tandfonline.com/toc/hmet20/current#.UvkpQPldXy4" target="_blank" rel="noopener noreferrer">Metaphor and Symbol </a>
            <a href="http://www.tandfonline.com/toc/pnrh20/current#.UvkptfldXy4" target="_blank" rel="noopener noreferrer">Neuropsychological Rehabilitation </a>
            <a href="http://www.parenting.org/" target="_blank" rel="noopener noreferrer">Parenting </a>
            <a href="http://onlinelibrary.wiley.com/journal/10.1111/(ISSN)1475-6811" target="_blank" rel="noopener noreferrer">Personal Relationships </a>
            <a href="http://scholar.google.com/citations?user=FZzaeRsAAAAJ&hl=en&oi=sra" target="_blank" rel="noopener noreferrer">Personality and Individual Differences </a>
            <a href="http://pb.rcpsych.org/" target="_blank" rel="noopener noreferrer">Psychiatric Bulletin </a>
            <a href="http://www.apa.org/pubs/journals/men/index.aspx" target="_blank" rel="noopener noreferrer">Psychology of Men & Masculinity </a>
            <a href="http://www.psychologytoday.com/" target="_blank" rel="noopener noreferrer">Psychology Today </a>
            <a href="http://onlinelibrary.wiley.com/journal/10.1002/(ISSN)1532-2998" target="_blank" rel="noopener noreferrer">Stress and Health </a>
            <a href="http://www.tandfonline.com/loi/hsgs20#.UvlVAvldXy4" target="_blank" rel="noopener noreferrer">Studies in Gender and Sexuality </a>
            <a href="http://www.sciencedirect.com/science/journal/07405472" target="_blank" rel="noopener noreferrer">Substance Abuse </a>
            <a href="http://www.save.org/" target="_blank" rel="noopener noreferrer">Suicide and Life-Threatening Behavior </a>
            <a href="http://www.sagepub.com/journalsProdDesc.nav?prodId=Journal200782" target="_blank" rel="noopener noreferrer">Trauma, Violence & Abuse</a>
          </article>
          <article>
            <h4>Medications and Health Supplements</h4>
            <a href="http://www.drugs.com/drug_interactions.html" target="_blank" rel="noopener noreferrer">Drug Interactions, Drugs.com </a>
            <a href="http://umm.edu/health/medical/drug-interaction-tool" target="_blank" rel="noopener noreferrer">Drug Interactions Checker </a>
            <a href="http://www.nlm.nih.gov/medlineplus/mplusdictionary.html" target="_blank" rel="noopener noreferrer">Medical Dictionary </a>
            <a href="http://www.fda.gov/Drugs/default.htm" target="_blank" rel="noopener noreferrer">Medications, FDA </a>
            <a href="http://www.mentalhealth.com/p30.html" target="_blank" rel="noopener noreferrer">Medication, Internet Mental Health </a>
            <a href="http://www.pdrhealth.com/" target="_blank" rel="noopener noreferrer">Medications, PDR </a>
            <a href="http://www.nlm.nih.gov/medlineplus/druginformation.html" target="_blank" rel="noopener noreferrer">Medline, Comparison </a>
            <a href="http://ods.od.nih.gov/factsheets/list-VitaminsMinerals/" target="_blank" rel="noopener noreferrer">Multivitamins </a>
            <a href="http://www.samhsa.gov/index.aspx" target="_blank" rel="noopener noreferrer">SAMHSA's Psychiatry and Psychology</a>
          </article>
          <article>
            <h4>Mental Health Care General Links</h4>
            <a href="http://counsellingresource.com/" target="_blank" rel="noopener noreferrer">CounsellingResource.com </a>
            <a href="http://www.mentalhealth.com/" target="_blank" rel="noopener noreferrer">GoodTherapy.org </a>
            <a href="http://www.mentalhealth.com/" target="_blank" rel="noopener noreferrer">Internet Mental Health </a>
            <a href="https://www.apa.org/practice/programs/workplace/phwp-fact-sheet.pdf" target="_blank" rel="noopener noreferrer">Let’s Talk Facts, APA </a>
            <a href="http://mentalhealth.about.com/" target="_blank" rel="noopener noreferrer">Mental Health Counselor Resources, About.com </a>
            <a href="http://www.mentalhelp.net/" target="_blank" rel="noopener noreferrer">Mental Help Net </a>
            <a href="http://www.webmd.com/mental-health/mental-health-types-illness" target="_blank" rel="noopener noreferrer">Mental Illnesses/Disorders </a>
            <a href="http://psychcentral.com/" target="_blank" rel="noopener noreferrer">PsychCentral.com </a>
            <a href="http://www.uofmhealth.org/health-library" target="_blank" rel="noopener noreferrer">University of Michigan Health Topics A to Z </a>
            <a href="http://info.nationaljewish.org/resources/search_results_hssubject.php?healthScience=Consumer+Health+Guide" target="_blank" rel="noopener noreferrer">Web Sites You Can Trust, Medical Library Association</a>
          </article>
          <article>
            <h4>Personality Disorders </h4>
            <a href="http://www.mentalhelp.net/poc/center_index.php?id=8" target="_blank" rel="noopener noreferrer">Mental Help Net - Personality Disorders </a>
            <a href="http://www.focusas.com/PersonalityDisorders.html" target="_blank" rel="noopener noreferrer">Personality Disorders - Focus Adolescent Counselor Services </a>
          </article>
          <article>
            <h4>Suicide Awareness and Hotlines </h4>
            <a href="http://www.samhsa.gov/prevention/suicide.aspx" target="_blank" rel="noopener noreferrer">SAMHSA's Suicide </a>
            <a href="http://www.save.org/" target="_blank" rel="noopener noreferrer">Suicide Awareness Voices of Education </a>
            <a href="http://www.metanoia.org/suicide/" target="_blank" rel="noopener noreferrer">Suicide: Read This First</a>
          </article>
          <article>
            <h4>Additional Mental Health Care & Counseling Resources </h4>
            <a href="http://www.samhsa.gov/trauma/index.aspx" target="_blank" rel="noopener noreferrer">Disaster/Trauma </a>
            <a href="http://www.dpt.samhsa.gov/comor/hivaids.aspx" target="_blank" rel="noopener noreferrer">HIV/AIDS </a>
            <a href="http://www.psychwww.com/books/interp/toc.htm" target="_blank" rel="noopener noreferrer">Interpretation of Dreams </a>
            <a href="http://www.keirsey.com/sorter/register.aspx" target="_blank" rel="noopener noreferrer">Keirsey (Myers-Briggs) Temperament Sorter </a>
            <a href="http://www.webmd.com/menopause/guide/menopause-symptoms-types" target="_blank" rel="noopener noreferrer">Signs of Menopause, Symptoms of Menopause</a>
          </article>
        </div>
      </LinkBox>
    </>
  )
}
