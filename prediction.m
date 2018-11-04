clear all
close all
clc

% We can define a signal with respect to time.
data = importdata('total.csv',',');
data = data.data;
signal_ = data(:,2:end)';
time = data(:,1)';


%% Setting up the Problem for a Neural Network
% The signal convert is then converted to a cell array.  Neural Networks
% represent timesteps as columns of a cell array, do distinguish them from
% different samples at a given time, which are represented with columns
% of matrices.

signal = con2seq(signal_);

%%
% To set up the problem we will use the first four values of the
% signal as initial input delay states, and the rest except for the
% last step as inputs.

Xi = signal(1:4);
X = signal(5:(end-1));
timex = time(5:(end-1));

%%
% The targets are now defined to match the inputs, but shifted earlier
% by one timestep.

T = signal(6:end);

%% Designing the Linear Layer
% The function *newlind* will now design a linear layer with a single
% neuron which predicts the next timestep of the signal given the current
% and four past values.

net = newlind(X,T,Xi);
% view(net)

%% Testing the Linear Layer
% The network can now be called like a function on the inputs and delayed
% states to get its time response.

Y = net(X,Xi);
Y = cell2mat(Y);
T = cell2mat(T)
%%
% The output signal is plotted with the targets.

figure
plot(time,signal_(1,:),'b-',timex+1,Y(1,:),'b--')
xlabel('Time');
ylabel('Total Unit Reimbursed');
legend('Target','Predicted');
title('Output and Target Signals');

figure
plot(time,signal_(2,:),'b-',timex+1,Y(2,:),'b--')
xlabel('Time');
ylabel('Total amount reimbursed');
legend('Target','Predicted');
title('Output and Target Signals');

figure
plot(time,signal_(3,:),'b-',timex+1,Y(3,:),'b--')
xlabel('Time');
ylabel('Total Prescription')
legend('Target','Predicted');
title('Output and Target Signals');
