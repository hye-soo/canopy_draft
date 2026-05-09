"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import ScrollMoveText from "./ScrollMoveText";

export default function FeatureBudgetDemo() {
  const [mode, setMode] = useState("budget");
  const [budgetType, setBudgetType] = useState("daily");

  return (
    <section className={styles.featureGrid}>
      <div className={styles.featureDemo}>
        <div className={styles.budgetPreviewCard}>
          {/* Expense / Budget tabs */}
          <div className={styles.appTopTabs}>
            <button
              type="button"
              onClick={() => setMode("expense")}
              className={`${styles.appTopTab} ${
                mode === "expense" ? styles.appTopTabActive : ""
              }`}
            >
              Expense
            </button>

            <button
              type="button"
              onClick={() => setMode("budget")}
              className={`${styles.appTopTab} ${
                mode === "budget" ? styles.appTopTabActive : ""
              }`}
            >
              Budget
            </button>
          </div>

          <div
            className={`${styles.appTabLine} ${
              mode === "budget" ? styles.appTabLineRight : styles.appTabLineLeft
            }`}
          />

          {/* Expense layout */}
          {mode === "expense" ? (
            <div className={styles.expenseForm}>
              <div className={styles.fullField}>
                <label>Expense Name</label>
                <div className={styles.previewInput}></div>
              </div>

              <div className={styles.inputGrid}>
                <div className={styles.fieldGroup}>
                  <label>Amount</label>
                  <div className={styles.previewInput}>$</div>
                </div>

                <div className={styles.fieldGroup}>
                  <label>Date</label>
                  <div className={styles.previewInput}>Apr 13</div>
                </div>
              </div>

              <div className={styles.fullField}>
                <label>Categories</label>
                <div className={styles.previewInput}>
                  <span></span>
                  <span className={styles.selectArrow}>▸</span>
                </div>
              </div>
            </div>
          ) : (
            /* Budget layout */
            <div className={styles.budgetForm}>
              <div className={styles.budgetSwitch}>
                <span
                  className={`${styles.switchThumb} ${
                    budgetType === "monthly" ? styles.switchThumbRight : ""
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setBudgetType("daily")}
                  className={`${styles.switchButton} ${
                    budgetType === "daily" ? styles.switchButtonActive : ""
                  }`}
                >
                  Daily
                </button>

                <button
                  type="button"
                  onClick={() => setBudgetType("monthly")}
                  className={`${styles.switchButton} ${
                    budgetType === "monthly" ? styles.switchButtonActive : ""
                  }`}
                >
                  Monthly
                </button>
              </div>

              <div className={styles.inputGrid}>
                <div className={styles.fieldGroup}>
                  <label>Amount</label>
                  <div className={styles.previewInput}>$</div>
                </div>

                <div className={styles.fieldGroup}>
                  <label>Date</label>
                  <div className={styles.previewInput}>Apr 13</div>
                </div>
              </div>
            </div>
          )}

          <button className={styles.previewSaveButton}>Save</button>
        </div>
      </div>

      <div className={styles.featureTextCard}>
        <span className={styles.featureNumber}>01</span>

        <ScrollMoveText className={styles.featureTextScroll}>
          <h2>Set your budget and log expenses</h2>

          <p className={styles.featureDescription}>
            Quickly add expenses, set daily or monthly budgets, and check your
            daily budget.
          </p>
        </ScrollMoveText>
      </div>
    </section>
  );
}
