import React from 'react'
import styles from '../pages/index.module.css'
import SummaryCardContainer from "./summary-card-container"
import Footer from "./footer"
import LatestNewsContainer from "./latest-news-container"
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Calendar } from 'fullcalendar'

document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('calendar')
  const calendar = new Calendar(calendarEl, {
    initialView: 'dayGridMonth'
  })
  calendar.render()
})

const FinanceManagement = () => {
  const router = useRouter ();
  router.push('/mock_imaginario');
  return (
    <div className={styles.financeManagement}>
      <Image
        className={styles.financeManagementChild}
        alt=""
        src="/undefined.png"
      />
      <Image
        className={styles.financeManagementItem}
        alt=""
        src="/undefined.png"
      />
      <div className={styles.summary}>Summary</div>
      <div className={styles.activitySummary}>Activity Summary</div>
      <SummaryCardContainer />
      <Image
        className={styles.financeManagementInner}
        alt=""
        src="/undefined3.png"
      />
      <div className={styles.financeHealthParent}>
        <div className={styles.financeHealth}>Finance health</div>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.ellipseDiv} />
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.parent}>
          <b className={styles.b}>481</b>
          <div className={styles.financeHealthIsGreatParent}>
            <div className={styles.financeHealthIs}>
              Finance Health is Great
            </div>
            <div className={styles.updated08212021}>Updated 08–21–2021</div>
          </div>
        </div>
      </div>
      <div className={styles.dashboardParent}>
        <div className={styles.dashboard}>Dashboard</div>
        <div className={styles.vuesaxboldcalendarParent}>
        <Image
            className={styles.vuesaxboldcalendarIcon}
            alt="caledario"
            src="./calendarhover.png"
          />
          <div className={styles.tasks}>August 21, 2021</div>
          <Image
            className={styles.vuesaxboldcalendarIcon}
            alt="calendario2"
            src="./calendarhover.png"
          />
        </div>
      </div>
      <div className={styles.rectangleDiv} />
      <input className={styles.frameInput} placeholder="Search" type="text" />
      <div className={styles.frameParent}>
        <div className={styles.vuesaxboldhome2Parent}>
        <Image
            className={styles.vuesaxboldhome2Icon}
            alt="Search"
            src="/search-normal.png"
          />
          <div className={styles.dashboard1}>Dashboard</div>
        </div>
        <div className={styles.vuesaxoutlinenoteParent}>
        <Image
            className={styles.vuesaxboldhome2Icon}
            alt="home"
            src="/home-2.png"
          />
          <div className={styles.tasks}>Tasks</div>
        </div>
        <div className={styles.vuesaxoutlinenoteParent}>
        <Image
            className={styles.vuesaxboldhome2Icon}
            alt="tasks"
            src="/note.png"
          />
          <div className={styles.tasks}>Rooms</div>
        </div>
        <div className={styles.vuesaxoutlinenoteParent}>
        <Image
            className={styles.vuesaxboldhome2Icon}
            alt="rooms"
            src="/3dcube.png"
          />
          <div className={styles.tasks}>Calendar</div>
        </div>
        <div className={styles.vuesaxoutlinenoteParent}>
        <Image
            className={styles.vuesaxboldhome2Icon}
            alt="calendar"
            src="/calendar.png"
          />
          <div className={styles.tasks}>Members</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.vuesaxoutlinenoteParent}>
        <Image
            className={styles.vuesaxboldhome2Icon}
            alt="members"
            src="/tag-user.png"
          />
          <div className={styles.tasks}>Messages</div>
        </div>
        <div className={styles.vuesaxoutlinenoteParent}>
        <Image
            className={styles.vuesaxboldhome2Icon}
            alt="messages"
            src="/message.png"
          />
          <div className={styles.tasks}>Settings</div>
        </div>
        <div className={styles.vuesaxoutlinenoteParent}>
        <Image
            className={styles.vuesaxboldhome2Icon}
            alt="settings"
            src="/setting-02.png"
          />
          <div className={styles.tasks}>Logout</div>
        </div>
      </div>
      <Image className={styles.vectorIcon} alt="logout" src="/logout.png" />
      <Image
        className={styles.financeManagementChild1}
        alt=""
        src="/undefined14.png"
      />
      <div className={styles.updateYourAccountToProVerParent}>
        <div className={styles.updateYourAccount}>
          Update your account to PRO VERSION now
        </div>
        <div className={styles.upgradeNowWrapper}>
          <div className={styles.financeHealthIs}>Upgrade Now</div>
        </div>
      </div>
      <div className={styles.financeManagementChild2} />
      <div className={styles.patternParent}>
        <div className={styles.pattern}>
          <div className={styles.mask} />
          <div className={styles.rectangle} />
          <div className={styles.rectangleCopy} />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.cardHolderNameParent}>
              <div className={styles.cardHolderName}>holder name</div>
              <div className={styles.anitaRose}>Peter Parker</div>
            </div>
            <div className={styles.cardHolderNameGroup}>
              <div className={styles.cardHolderName1}>VALID THRU</div>
              <div className={styles.anitaRose}>07 – 2025</div>
            </div>
          </div>
          <div className={styles.cardNumberParent}>
            <div className={styles.cardNumber}>card number</div>
            <div className={styles.div}>3829 4820 4629 ****</div>
          </div>
        </div>
      </div>
      <div className={styles.groupParent}>
      <Image className={styles.groupIcon} alt="gallery" src="/gallery.png" />
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild3} />
          <div className={styles.peterParkerParent}>
            <div className={styles.peterParker}>Peter Parker</div>
            <div className={styles.id281770}>ID – 281770</div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.frameWrapper}>
          <div className={styles.cashOutParent}>
            <div className={styles.cashOut}>Cash out</div>
            <Image
              className={styles.vuesaxlinearexportIcon}
              alt="linearexport"
              src="/export.png"
            />
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.vuesaxlinearimportParent}>
          <Image
              className={styles.vuesaxlinearexportIcon}
              alt="linearimport"
              src="/import.png"
            />
            <div className={styles.cashOut}>Add cash</div>
          </div>
        </div>
      </div>
      <Image
        className={styles.financeManagementChild3}
        alt="linearexport2"
        src="/export.png"
      />
      <div className={styles.coreSafariBigSurLigh} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild4} />
        <div className={styles.frameChild5} />
        <div className={styles.frameChild6} />
        <div className={styles.frameChild7} />
        <div className={styles.frameChild8} />
        <div className={styles.frameChild9} />
        <div className={styles.div1}>100</div>
        <div className={styles.div2}>211</div>
        <div className={styles.div3}>481</div>
        <div className={styles.div4}>600</div>
      </div>
      <div className={styles.transactionParent}>
        <div className={styles.b}>Transaction</div>
        <Footer />
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild10} />
          <div className={styles.financeHealthIs}>Total income</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild11} />
          <div className={styles.financeHealthIs}>Total expenses</div>
        </div>
      </div>
      <div className={styles.newsList}>
        <div className={styles.financeHealthIs}>Latest news</div>
        <LatestNewsContainer />
      </div>
      <Image
        className={styles.vuesaxboldgalleryIcon}
        alt="gallery2" 
        src="/gallery.png"
      />
      <Image
        className={styles.vuesaxboldgalleryIcon1}
        alt="gallery3" 
        src="/gallery.png"
      />
      <Image
        className={styles.vuesaxboldgalleryIcon2}
        alt="gallery4" 
        src="/gallery.png"
      />
      <Image
        className={styles.vuesaxboldgalleryIcon3}
        alt="gallery5" 
        src="/gallery.png"
      />
      <Image
        className={styles.vuesaxboldgalleryIcon4}
        alt="gallery6" 
        src="/gallery.png"
      />
      <Image
        className={styles.vuesaxboldgalleryIcon5}
        alt="gallery7" 
        src="/gallery.png"
      />
      <Image
        className={styles.vuesaxboldgalleryIcon6}
        alt="gallery8" 
        src="/gallery.png"
      />
      <Image
        className={styles.vuesaxboldgalleryIcon7}
        alt="gallery9" 
        src="/gallery.png"
      />
    </div>
  );
};

export default FinanceManagement;
