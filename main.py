import plotly
import pandas as pd

# load dataset
year = "2016"
df = pd.read_csv("Hackathon/State_Drug_Utilization_Data_"+year+".csv")

# clean the dataset
idx = df.index[df['Suppression Used'] == False].tolist()
df = df.iloc[idx]

# find the statistics
df = df[df['Product Name'].notnull()]
product = set(df['Product Name'].str.lower())

state = set(df.iloc[:]['State'])
state.remove('XX')

# # access partucular cell
# df['State'].iloc[0]
# # find where the particular value is
# df.index[df['State'] == 'NY'].tolist()
# # data analysis

unit = []
for s in state:
    indx = df['Units Reimbursed'][df.index[df['State'] == s].tolist()]
    units = indx.values.tolist()
    data = []
    for i in units:
        if year == '2017':
            data.append(float(i.replace(',','')))
        else:
            data.append(i)
    unit.append(sum(data)/1000000)

amount = []
for s in state:
    indx = df['Total Amount Reimbursed'][df.index[df['State'] == s].tolist()]
    units = indx.values.tolist()
    data = []
    for i in units:
        if year == '2017':
            data.append(float(i.replace(',','')))
        else:
            data.append(i)
    amount.append(sum(data)/1000000)

prescriptions = []
for s in state:
    indx = df['Number of Prescriptions'][df.index[df['State'] == s].tolist()]
    units = indx.values.tolist()
    data = []
    for i in units:
        if year == '2017':
            data.append(float(i.replace(',','')))
        else:
            data.append(i)
    prescriptions.append(sum(data)/1000000)

print(sum(unit), sum(amount), sum(prescriptions))
state = list(state)
df = pd.DataFrame({'state': state, 'Total Amount Reimbursed': amount, 'Units Reimbursed': unit,'Number of Prescriptions': prescriptions })

for col in df.columns:
    df[col] = df[col].astype(str)

scl = [[0.0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'], [0.4, 'rgb(188,189,220)'], \
       [0.6, 'rgb(158,154,200)'], [0.8, 'rgb(117,107,177)'], [1.0, 'rgb(84,39,143)']]

df['text'] = 'State: ' + df['state'] + '<br>' +\
             'Units Reimbursed: '+df['Units Reimbursed']+'<br>' +\
             'Number of Prescriptions: '+df['Number of Prescriptions']

data = [dict(
    type='choropleth',
    colorscale=scl,
    autocolorscale=False,
    locations=df['state'],
    z=df['Total Amount Reimbursed'].astype(float),
    locationmode='USA-states',
    text=df['text'],
    marker=dict(
        line=dict(
            color='rgb(255,255,255)',
            width=2
        )),
    colorbar=dict(
        title="Millions USD")
)]

layout = dict(
    title=year+' US State Drug Amount Reimbursed',
    geo=dict(
        scope='usa',
        projection=dict(type='albers usa'),
        showlakes=True,
        lakecolor='rgb(255, 255, 255)'),
)

fig = dict(data=data, layout=layout)
plotly.offline.plot(fig, filename='amount_reimbursed'+year+'.html')
